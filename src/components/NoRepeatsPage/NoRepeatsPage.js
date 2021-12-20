import React, { useState } from "react";
import { parse } from "papaparse";
import TableRow from "../TableRow/TableRow";
import { removeDuplicates } from "../../utils";
import "../../TablePage.css";

function NoRepeatsPage() {
  const [highlighted, setHighlighted] = useState(false);
  const [noRepeatsSearches, setNoRepeatsSearches] = useState([]);
  return (
    <div>
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
                let noDuplicateArr = removeDuplicates(result.data);
                // noDuplicateArr.sort((a, b) => {
                //   return parseInt(b.hits, 10) - parseInt(a.hits, 10);
                // });
                setNoRepeatsSearches(noDuplicateArr);
              });
          }}
        >
          Drop CSV File Here
        </div>
        <table>
          <thead className="table-header">
            <tr>
              <th>Search Term</th>
              <th>Search Hits</th>
            </tr>
          </thead>
          <tbody>
            {noRepeatsSearches.map((search) => (
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
    </div>
  );
}

export default NoRepeatsPage;
