import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "animate.css";
import App from "./App.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found. Make sure you have <div id='root'></div> in your index.html.");
}

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
