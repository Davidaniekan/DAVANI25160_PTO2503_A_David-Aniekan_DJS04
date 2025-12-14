import React, { useContext } from "react";
import { PodcastContext } from "../PodcastContext.jsx";
import { genres as GENRE_LIST } from "../data.js";

/**
 * Container
 * High-level UI container responsible for rendering
 * application-wide controls such as filters and sorting.
 *
 * Responsibilities:
 * - Display genre filter dropdown
 * - Display sort dropdown
 * - Provide layout space for podcast grid and modal
 *
 * This component consumes state from PodcastContext.
 *
 * @component
 * @returns {JSX.Element} Container UI with filters and modal scaffolding
 */

export function Container() {
  const { sortKey, setSortKey, genre, setGenre, SORT_OPTIONS } =
    useContext(PodcastContext);

  /*  Handles changes to the genre filter dropdown. */
  const onGenreChange = (e) => setGenre(e.target.value);

  /*  Handles changes to the sort dropdown. */
  const onSortChange = (e) => setSortKey(e.target.value);

  return (
    <div className="container">
      {/* FILTER CONTROLS */}
      <div className="filters">
        {/* GENRE SELECT */}
        <label htmlFor="genreSelect">Filter by:</label>
        <select id="genreSelect" value={genre} onChange={onGenreChange}>
          <option value="all">All Genres</option>

          {/* Render genre options from static data */}
          {GENRE_LIST.map((g) => (
            <option key={g.id} value={g.id}>
              {g.title}
            </option>
          ))}
        </select>

        {/* SORT SELECT */}
        <label htmlFor="sortSelect" id="sort-label">
          Sort:
        </label>
        <select id="sortSelect" value={sortKey} onChange={onSortChange}>
          {/* Render available sort options from context */}
          {SORT_OPTIONS.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Podcast cards */}
      <div id="podcastList" className="podcast-list"></div>

      {/* MODAL SECTION */}
      <div id="modal" className="modal hidden" aria-hidden="true">
        <div className="modal-content">
          {/* Close button */}
          <span className="close-button">&times;</span>
          {/* Modal dynamic content */}
          <div id="modalContent"></div>
        </div>
      </div>
    </div>
  );
}

export default Container;
