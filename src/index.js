import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Sidebar />
    <div className="app">
      <Navbar />
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
