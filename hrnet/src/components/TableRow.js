import React from "react";
import Checkbox from "./Checkbox";

const TableRow = ({ row, index,  isSelected, onRowSelect }) => {
  return (
    <tr
      style={{ animationDelay: `${index * 0.05}s` }}
      className={`employee-table-row${isSelected ? " selected" : ""}`}
    >
      <td>
        <Checkbox
          id={`row-${row.id}`}
          checked={isSelected}
          onChange={() => onRowSelect(row.id)}
        />
      </td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.startDate}</td>
      <td>{row.department}</td>
      <td>{row.dateOfBirth}</td>
      <td>{row.street}</td>
      <td>{row.city}</td>
      <td>{row.state}</td>
      <td>{row.zipCode}</td>
    </tr>
  );
};

export default TableRow;
