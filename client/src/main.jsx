import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// removed incorrect import
import { BrowserRouter } from "react-router-dom";
import React, { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
