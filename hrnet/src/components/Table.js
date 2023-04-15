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

  useEffect(() => {
    setRows(getInitialRows());
  }, []);

  const renderTableHeader = (label) => (
    <th>
      {label}
    </th>
  );

  return (
    <div className="wrapper">
      <div className="employee-table">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {renderTableHeader("First Name")}
                {renderTableHeader("Last Name")}
                {renderTableHeader("Start Date")}
                {renderTableHeader("Department")}
                {renderTableHeader("Date of Birth")}
                {renderTableHeader("Street")}
                {renderTableHeader("City")}
                {renderTableHeader("State")}
                {renderTableHeader("Zip Code")}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
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
