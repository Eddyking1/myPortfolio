// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./contextApi/newIndex.js";
import { IconContext } from "react-icons/lib";
import "./main.scss";
import AppRoutes from "./appRoutes.js";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
window.axios = axios;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Store>
    <Router>
      <IconContext.Provider value={{ color: "black", className: "react-icons" }}>
        <AppRoutes />
      </IconContext.Provider>
    </Router>
  </Store>
);

reportWebVitals();
