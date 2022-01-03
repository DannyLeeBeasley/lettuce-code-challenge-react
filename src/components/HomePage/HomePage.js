import React, { useState } from "react";
import { parse } from "papaparse";
import TableRow from "../TableRow/TableRow";
import "../../TablePage.css";
import "./HomePage.css";
import { countSearchTerms } from "../../utils.js";

function HomePage() {
  const [highlighted, setHighlighted] = useState(false);
  const [searchTermHits, setSearchTermHits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [numberOfSearches, setNumberOfSearches] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const searchTermsToDisplay = searchTerm
    ? searchTermHits
        .filter((searchedTerm) => {
          return searchedTerm.query
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
        .filter((searchedTerm) => {
          if (!buttonClicked) {
            return true;
          } else {
            return searchedTerm.hits === "0";
          }
        })
    : searchTermHits.filter((searchedTerm) => {
        if (!buttonClicked) {
          return true;
        } else {
          return searchedTerm.hits === "0";
        }
      });

      console.log(searchTermsToDisplay)

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
              let searchTermCount = countSearchTerms(result.data);
              let searchTermIndex = 0;
              let searchTermCountArr = [];
              searchTermCount.forEach((searchHits, searchTerm) => {
                searchTermCountArr.push({
                  index: searchTermIndex,
                  times_searched: searchHits.count,
                  query: searchTerm,
                  hits: searchHits.hits,
                });
              });
              setSearchTermHits(searchTermCountArr);
            });
        }}
      >
        Drop CSV File Here
      </div>
      <div>
        <button className={buttonClicked ? "zero-hits-button" : "show-all-button"} onClick={() => setButtonClicked((prevButtonClicked) => !prevButtonClicked)}>
          {buttonClicked ? "Show All Searches" : "Show Searches With Zero Hits"}
        </button>
      </div>
      <div className="search-term-input-container">
        <input
          className="search-term-input"
          type="text"
          name="searchTermInput"
          placeholder="Type here search to search by query..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(searchTerm);
          }}
        />
      </div>
      <div className="table-tite">
        <h3>{!buttonClicked ? "All Unique Search Queries" : "Search Queries With Zero Hits"}</h3>
      </div>
      <table>
        <tr className="table-header">
          <th>Search Term</th>
          <th>Times Searched</th>
        </tr>
        {searchTermsToDisplay.map((search) => (
          <TableRow
            key={search.index}
            className="table-row"
            query={search.query}
            hits={search.times_searched}
          />
        ))}
      </table>
    </div>
  );
}

export default HomePage;
