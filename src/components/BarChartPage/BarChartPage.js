import React, { useState } from "react";
import { parse } from "papaparse";
import BarChart from "../BarChart/BarChart";
import "./BarChartPage.css";

function BarChartPage() {
  const [highlighted, setHighlighted] = useState(false);
  const [allSearches, setAllSearches] = useState([]);

  return (
    <div className="bar-chart-page">
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
        Drop CSV File Here For Bar Graph
      </div>
      <div>
        <BarChart className="bar-chart" allSearches={allSearches} setAllSearches={setAllSearches} />
      </div>
    </div>
  );
}

export default BarChartPage;
