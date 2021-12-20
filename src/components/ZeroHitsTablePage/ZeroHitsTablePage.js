import React, { useState } from "react";
import { parse } from "papaparse";
import TableRow from "../TableRow/TableRow";
import { removeDuplicates } from "../../utils";

function ZeroHitsTablePage() {
  const [highlighted, setHighlighted] = useState(false);
  const [zeroHitSearches, setZeroHitSearches] = useState([]);
  return (
    <div>
      <div className="sorted-table-page">
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
                setZeroHitSearches(
                  noDuplicateArr.filter((searchobj) => searchobj.hits === "0")
                );
              });
          }}
        >
          Drop CSV File Here For Table Sorted By Hits
        </div>
        <table>
          <tr className="table-header">
            <th>Search Term</th>
            <th>Search Hits</th>
          </tr>
          {zeroHitSearches.map((search) => (
            <TableRow
              key={search.index}
              className="table-row"
              query={search.query}
              hits={search.hits}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

export default ZeroHitsTablePage;
