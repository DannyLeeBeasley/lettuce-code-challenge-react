import React, { useState } from "react";
import { parse } from "papaparse";
import BarChart from "../BarChart/BarChart";
import { removeDuplicates } from "../../utils";
import "./BarChartPage.css";

function BarChartPage() {
  const [highlighted, setHighlighted] = useState(false);
  const [allSearches, setAllSearches] = useState([]);
  const [onlySearchTermsAndHits, setOnlySearchTermsAndHits] = useState([]);

  return (
    <div className="bar-chart-page">
      <div
        id="csv-drop-zone"
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
              setOnlySearchTermsAndHits(
                removeDuplicates(
                  result.data
                    .map((searchObj) => {
                      delete searchObj["id"];
                      delete searchObj["ip"];
                      delete searchObj["time"];
                      delete searchObj["user_id"];
                      return searchObj;
                    })
                    .filter((searchObj) => searchObj.hits >= 130)
                )
              );
            });
        }}
      >
        Drop CSV File Here
      </div>
      <div className="bar-chart-container">
        <BarChart
          className="bar-chart"
          allSearches={allSearches}
          setAllSearches={setAllSearches}
          onlySearchTermsAndHits={onlySearchTermsAndHits}
        />
      </div>
    </div>
  );
}

export default BarChartPage;
