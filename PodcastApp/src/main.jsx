import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/**
 * Application bootstrap module. Mounts the React application into the DOM.
 *
 * This module:
 * - Locates the DOM element with id `root`.
 * - Creates a React root and renders the `App` component inside `StrictMode`.
 *
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
