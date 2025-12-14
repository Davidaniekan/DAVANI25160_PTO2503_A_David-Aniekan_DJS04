import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/Header.jsx";
import { Container } from "./components/Container.jsx";
import { genres } from "./data.js";
import { fetchPodcasts } from "./api/fetchPodcast.js";
import PodcastGrid from "./components/PodcastGrid";
import { PodcastProvider } from "./PodcastContext.jsx";
import { Pagination } from "./components/Pagination.jsx";

/**
 * Root React component for the PodcastApp.
 *
 * Responsibilities:
 * - Fetch podcast data from the remote API.
 * - Manage global loading and error states.
 * - Provide podcast data to the app via `PodcastProvider`.
 * - Render the main UI structure:
 *   - Header
 *   - Filter & sort controls
 *   - Podcast grid
 *   - Pagination controls
 *
 * @component
 * @returns {JSX.Element} The application UI.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    /* PodcastProvider supplies global podcast state to the app,
     * including filtered, sorted, and paginated results. */

    <PodcastProvider initialPodcasts={podcasts}>
      {/* APP HEADER */}
      <Header />

      {/* FILTER & SORT CONTROLS */}
      <Container />

      {/* LOADING STATE */}
      {loading && (
        <div className="message-container">
          <div className="spinner"></div>
          <p className="loading">Loading podcasts...</p>
        </div>
      )}

      {/* ERROR STATE */}
      {error && (
        <div className="message-container">
          <div className="error">
            Error occurred while fetching podcasts: {error}
          </div>
        </div>
      )}

      {/* PODCAST GRID */}
      {!loading && !error && (
        <PodcastGrid podcasts={podcasts} genres={genres} />
      )}

      {/* PAGINATION CONTROLS */}
      <Pagination />
    </PodcastProvider>
  );
}
