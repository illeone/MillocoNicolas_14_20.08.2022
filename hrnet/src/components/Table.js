import React, { useState, useEffect } from "react";

const getInitialRows = () => {
  const storedData = localStorage.getItem("employees");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const Table = () => {
  const [rows, setRows] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    setRows(getInitialRows());
  }, []);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAscending(!sortAscending);
    } else {
      setSortField(field);
      setSortAscending(true);
    }
  };

  const renderTableHeader = (label, field) => (
    <th
      onClick={() => handleSort(field)}
      title="Click to sort in ascending or descending order"
    >
      {label}
    </th>
  );

  const sortedRows = rows
    .sort((a, b) => {
      if (sortField === "") {
        return 0;
      }
      const valueA = a[sortField];
      const valueB = b[sortField];
      if (valueA < valueB) {
        return sortAscending ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortAscending ? 1 : -1;
      }
      return 0;
    });


  return (
    <div className="wrapper">
      <div className="employee-table">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {renderTableHeader("First Name", "firstName")}
                {renderTableHeader("Last Name", "lastName")}
                {renderTableHeader("Start Date", "startDate")}
                {renderTableHeader("Department", "department")}
                {renderTableHeader("Date of Birth", "birthDate")}
                {renderTableHeader("Street", "street")}
                {renderTableHeader("City", "city")}
                {renderTableHeader("State", "state")}
                {renderTableHeader("Zip Code", "zipCode")}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => (
                <tr className="employee-table-row">
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
