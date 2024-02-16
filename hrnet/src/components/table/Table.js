import React, { useState, useEffect } from "react";
import Checkbox from "../buttons/Checkbox";
import TableRow from "./TableRow";
import TopTableControls from "./TopTableControls";
import BottomTableControls from "./BottomTableControls";

import { useEmployees } from '../../EmployeeContext';

const addIdToEmployeeRows = (rows) => {
  return rows.map((row, index) => ({ ...row, id: index }));
};

const Table = () => {

  const { employees } = useEmployees(); 

  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => {
    const rowsWithId = addIdToEmployeeRows(employees);
    setRows(rowsWithId);
  }, [employees]); 

  useEffect(() => {
    setSelectedRows(new Set());
  }, [currentPage]);

  useEffect(() => {
    setSelectAll(false);
  }, [currentPage]);


  const handleDelete = () => {
    const remainingRows = rows.filter((row) => !selectedRows.has(row.id));
    setRows(remainingRows);
    setSelectedRows(new Set());
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

  // Fonction de tri
  const sortRows = (rows, field, ascending) => {
    return [...rows].sort((a, b) => {
      if (field === "") {
        return 0;
      }
      const valueA = a[field];
      const valueB = b[field];
      if (valueA < valueB) {
        return ascending ? -1 : 1;
      }
      if (valueA > valueB) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  };

  // Fonction de filtrage
  const filterRows = (rows, searchText) => {
    return rows.filter((row) => {
      return (
        row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const sortedRows = sortRows(rows, sortField, sortAscending);
  const filteredRows = filterRows(sortedRows, searchText);
  const displayedRows = filteredRows.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  const pageCount = Math.ceil(filteredRows.length / pageSize);

  // Gère la hauteur dynamique du tableau en fonction du nombre de lignes affichées
  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    const rowHeight = 40; // Hauteur d'une ligne
    const headerHeight = 40; // Hauteur de l'en-tête du tableau
    setTableHeight(headerHeight + rowHeight * displayedRows.length); // met à jour la hauteur du tableau
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
        <BottomTableControls
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={setCurrentPage}
          onDelete={handleDelete}
          showDelete={selectedRows.size > 0}
        />
      </div>
    </div>
  );
};

export default Table;
