import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import BarChartPage from "./components/BarChartPage/BarChartPage";
import SortedTablePage from "./components/SortedTablePage/SortedTablePage";
import ZeroHitsTablePage from "./components/ZeroHitsTablePage/ZeroHitsTablePage";
import NoRepeatsPage from "./components/NoRepeatsPage/NoRepeatsPage";
import AllSearchesTablePage from "./components/AllSearchesTablePage/AllSearchesTablePage";

ReactDOM.render(
  <Router>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="allsearches" element={<AllSearchesTablePage />} />
      <Route path="barchart" element={<BarChartPage />} />
      <Route path="sortedtable" element={<SortedTablePage />} />
      <Route path="zerohitstable" element={<ZeroHitsTablePage />} />
      <Route path="norepeats" element={<NoRepeatsPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
