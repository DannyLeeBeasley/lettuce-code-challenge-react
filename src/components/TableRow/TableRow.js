import "./TableRow.css";

function TableRow({ query, hits }) {
  return (
    <tr>
      <td>{query}</td>
      <td>{hits}</td>
    </tr>
  );
}

export default TableRow;
