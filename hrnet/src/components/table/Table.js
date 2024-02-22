import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import TopTableControls from "./TopTableControls";
import BottomTableControls from "./BottomTableControls";
import TableHeader from "./TableHeader";

import { useEmployees } from '../../EmployeeContext';

const Table = () => {

  const { employees, deleteEmployee } = useEmployees(); 

  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setRows(employees);
  }, [employees]);

  useEffect(() => {
    setSelectAll(false);
  }, [currentPage]);

  const handleDelete = () => {
    const idsToDelete = Array.from(selectedRows);
    deleteEmployee(idsToDelete);
    setSelectedRows([]); 
  };
  
  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const handleSelect = (id) => {
    setSelectedRows(prevSelectedRows => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter(rowId => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };
  
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(displayedRows.map(row => row.id));
    }
    setSelectAll(!selectAll);
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

  useEffect(() => {
    const allDisplayedRowsSelected = displayedRows.every(row => selectedRows.includes(row.id));
    setSelectAll(displayedRows.length > 0 && allDisplayedRowsSelected);
  }, [selectedRows, displayedRows]);  

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
            <TableHeader
              selectAll={selectAll} 
              handleSelectAll={handleSelectAll} 
              renderTableHeader={renderTableHeader} 
            />
            <tbody>
              {displayedRows.map((row, index) => (
                <TableRow
                  key={row.id}
                  row={row}
                  index={index}
                  isSelected={selectedRows.includes(row.id)}
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
          showDelete={selectedRows.length > 0}
        />
      </div>
    </div>
  );
};

export default Table;
