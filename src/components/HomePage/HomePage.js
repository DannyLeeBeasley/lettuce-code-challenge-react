import React, { useState } from "react";
import { parse } from "papaparse";
import TableRow from "../TableRow/TableRow";
import "../../TablePage.css";
import "./HomePage.css";

function HomePage() {
  const [highlighted, setHighlighted] = useState(false);
  const [allSearches, setAllSearches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [numberOfSearches, setNumberOfSearches] = useState("");

  return (
    <div className="table-page">
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
        Drop CSV File Here
      </div>
      <div className="search-term-input-container">
        {/* <label>Search Term:</label> */}
        <input
          className="search-term-input"
          type="text"
          name="searchTermInput"
          placeholder="Type search term to tally number of times searched"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(searchTerm);
            setNumberOfSearches(
              allSearches.filter(
                (searchObj) =>
                  searchObj.query.toLowerCase() === searchTerm.toLowerCase()
              ).length.toString()
            );
          }}
        />
      </div>
      <div className="search-term-tally-container">
        <div className="search-term-display-container">
          <label>Search Term:</label>
          <p>{searchTerm}</p>
        </div>
        <div className="search-term-count-container">
          <label>Number Of Searches:</label>
          <p>{numberOfSearches}</p>
        </div>
      </div>
      {/* <table>
        <tr className="table-header">
          <th>Search Term</th>
          <th>Search Hits</th>
        </tr>
        {allSearches.map((search) => (
          <TableRow
            key={search.index}
            className="table-row"
            query={search.query}
            hits={search.hits}
          />
        ))}
      </table> */}
    </div>
  );
}

export default HomePage;
