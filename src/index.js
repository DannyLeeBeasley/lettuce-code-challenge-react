import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

ReactDOM.render(
  <Router>
    <Header />
    <NavBar />
    <Routes>
      <Route exact path="/" element={<App />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
