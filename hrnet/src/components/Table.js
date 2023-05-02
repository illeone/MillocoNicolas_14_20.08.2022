import React, { useState, useEffect } from "react";
// import SearchBar from "./Search";
// import DropDown from "./DropDown";
import Checkbox from "./Checkbox";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import TopTableControls from "./TopTableControls";

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
  const [searchText, setSearchText] = useState("");
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

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
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
    })
    .filter((row) => {
      return (
        row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
    });

  const pageCount = Math.ceil(sortedRows.length / pageSize);

  const displayedRows = sortedRows.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

    // Gère la hauteur dynamique du tableau en fonction du nombre de lignes affichées
    const [tableHeight, setTableHeight] = useState(0);

    useEffect(() => {
      const rowHeight = 40; // Hauteur d'une ligne
      const headerHeight = 40; // Hauteur de l'en-tête du tableau
      setTableHeight(headerHeight + rowHeight * displayedRows.length); // Calcule et met à jour la hauteur du tableau
    }, [displayedRows]);

  return (
    <div className="wrapper">
      <div className="employee-table">
        <TopTableControls
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
          onSearch={handleSearch}
        />
        <div className="table-container" style={{ height: tableHeight }}>
          <table>
            <thead>
              <tr>
                <th className="col-select" onClick={handleSelectAll}>
                  <Checkbox
                    id="select-all"

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
              {displayedRows.map((row, index) => (
                <TableRow
                  key={row.id}
                  row={row}
                  index={index}
                  isSelected={selectedRows.has(row.id)}
                  onRowSelect={handleSelect}
                />
              ))}
            </tbody>
          </table>

        </div>
        <div className="employee-table-controls">
          <div className="employee-table-bottom-left">
            <button
              className="employee-table-button-delete"
              onClick={handleDelete}
              style={{
                display: selectedRows.size > 0 ? "inline-block" : "none",
              }}
            >
              <span className="employee-table-button-delete-content">
                <i className="fas fa-trash-alt icon"></i>
                <span>Delete</span>
              </span>
            </button>
          </div>
          <div className="employee-table-bottom-right">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={setCurrentPage}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Table;
