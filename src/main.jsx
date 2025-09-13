import React from "react"; // ✅ only needed if JSX transform isn’t automatic
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
