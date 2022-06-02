import React from "react";
// import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import { createRoot } from "react-dom/client";
// import { Routes, Route } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  //   <Routes>
  // <Route>
  <App tab="home" />
  //</Route>
  //</Routes>
);
// ReactDOM.render(<App />, document.getElementById("root"));
