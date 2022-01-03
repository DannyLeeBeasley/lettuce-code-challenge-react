import React, { useState } from "react";
import { parse } from "papaparse";
import TableRow from "../TableRow/TableRow";
import "../../TablePage.css";

function AllSearchesTablePage() {
  const [highlighted, setHighlighted] = useState(false);
  const [allSearches, setAllSearches] = useState([]);

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
      <div>
        <h3>All Searches Including Duplicate Queries</h3>
      </div>
      <table>
        <thead className="table-header">
          <tr>
            <th>Search Term</th>
            <th>Search Hits</th>
          </tr>
        </thead>
        <tbody>
          {allSearches.map((search) => (
            <TableRow
              key={search.index}
              className="table-row"
              query={search.query}
              hits={search.hits}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllSearchesTablePage;
