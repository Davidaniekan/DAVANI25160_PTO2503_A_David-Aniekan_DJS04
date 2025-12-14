import { useContext, useRef, useEffect, useState } from "react";
import podcastIcon from "../assets/podcast-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import userProfile from "../assets/user-profile.svg";
import { PodcastContext } from "../PodcastContext.jsx";

/**
 * Header
 * Top-level application header component.
 *
 * Responsibilities:
 * - Display application branding (logo and name)
 * - Provide a toggleable search input tied to global search state
 * - Display user profile avatar
 *
 * Search behavior:
 * - Clicking the search icon reveals the input
 * - Input auto-focuses when visible
 * - Pressing Enter closes the search input
 *
 * @returns {JSX.Element} Header UI component.
 */
export function Header() {
  const { search, setSearch } = useContext(PodcastContext);

  /* Controls visibility of the search input.
   * When true, search input is expanded and focused. */
  const [showSearch, setShowSearch] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  /* Updates global search state when input changes. */
  const onChange = (e) => setSearch(e.target.value);

  /*
   * Handles keyboard interaction inside the search input.
   * Pressing Enter will close the search field.
   */
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      closeSearch();
    }
  };

  /* Reloads the app when the logo is clicked. */
  const reloadApp = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => location.reload(), 400);
  };

  /* Dynamic class for search container based on visibility state. */
  const searchContainerClass = `search-container ${showSearch ? "active" : ""}`;

  return (
    <header>
      <div className="header-left">
        <img
          src={podcastIcon}
          alt="podcast logo"
          className="podcast-icon"
          id="podcastIcon"
          onClick={reloadApp}
        />
        <span className="app-name">PodcastApp</span>
      </div>

      <div className="header-right">
        <div className={searchContainerClass}>
          <button className="search-btn" type="button" onClick={openSearch}>
            <img src={searchIcon} alt="search" className="search-icon" />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            id="searchBar"
            className="search-input"
            value={search}
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-label="Search podcasts"
          />
        </div>

        {/* Placeholder profile picture */}
        <img src={userProfile} alt="Profile Picture" className="profile-pic" />
      </div>
    </header>
  );
}
