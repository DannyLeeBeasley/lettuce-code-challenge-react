import React, { useEffect, useState } from "react";
import { parse } from "papaparse";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../Header/Header";
import "./MainTablePage.css";

function MainGraphPage() {

  const [highlighted, setHighlighted] = useState(false);
  const [allSearches, setAllSearches] = useState([]);

  return (
    <div>
      <Header />
      {/* <NavBar /> */}
      <div className="main-graph-page">
        <div
          className={
            highlighted ? "drop-zone-file-hover-on" : "drop-zone-file-hover-off"
          }
          onDragEnter={() => {
            setHighlighted(true);
          }}
          onDragLeave={() => {
            setHighlighted(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setHighlighted(false);
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                const result = parse(text, { header: true });
                setAllSearches(result.data);
              });
          }}
        >
          Drop CSV File Here For Table
        </div>
      </div>
    </div>
  );
}

export default MainGraphPage;
