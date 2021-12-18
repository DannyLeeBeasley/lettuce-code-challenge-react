import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import BarChartPage from "./components/BarChartPage/BarChartPage";

ReactDOM.render(
  <Router>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="barchart" element={<BarChartPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
