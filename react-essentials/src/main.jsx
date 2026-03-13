import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // NOTE: what happens if don't call it here?
import App from "./App.jsx";

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
*/

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
