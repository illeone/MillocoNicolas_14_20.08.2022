import React, { useState, useEffect } from "react";

const getInitialRows = () => {
  const storedData = localStorage.getItem("employees");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const addUniqueId = (rows) => {
  return rows.map((row, index) => ({ ...row, id: index }));
};

const Table = () => {
  const [rows, setRows] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => {
    const initialRows = getInitialRows();
    const rowsWithId = addUniqueId(initialRows); // Ajoute un identifiant unique à chaque ligne
    setRows(rowsWithId);
  }, []);

  useEffect(() => {
    setSelectedRows(new Set());
  }, [currentPage]);

  useEffect(() => {
    setSelectAll(false);
  }, [currentPage]);

  const updateLocalStorage = (newRows) => {
    const rowsWithoutId = newRows.map(({ id, ...rest }) => rest);
    localStorage.setItem("employees", JSON.stringify(rowsWithoutId));
  };

  const handleDelete = () => {
    const newSelectedRows = new Set(selectedRows);
    const newRows = rows.filter((row) => !newSelectedRows.has(row.id));
    setRows(newRows);
    setSelectedRows(new Set());
    updateLocalStorage(newRows);
  };

  const handleSelect = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
    } else {
      setSelectedRows(new Set(displayedRows.map((row) => row.id)));
      setSelectAll(true);
    }
  };

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

  const pageCount = Math.ceil(sortedRows.length / pageSize);

  const displayedRows = sortedRows.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div className="wrapper">
      <div className="employee-table">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="col-select" onClick={handleSelectAll}>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
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
              {displayedRows.map((row) => (
                <tr className="employee-table-row">
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleSelect(row.id)}
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
              ))}
            </tbody>
          </table>
        </div>
        <div className="employee-table-controls">
          <div className="employee-table-bottom-left">
            <button
              className="employee-table-button"
              onClick={handleDelete}
              style={{
                display: selectedRows.size > 0 ? "inline-block" : "none",
              }}
            >
              <span className="employee-table-button-content">
                <i className="fas fa-trash-alt icon"></i>
                <span>Delete</span>
              </span>
            </button>
          </div>
          <div className="employee-table-bottom-right">
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
              >
                &laquo;
              </button>
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  className="pagination-button"
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageCount - 1}
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;