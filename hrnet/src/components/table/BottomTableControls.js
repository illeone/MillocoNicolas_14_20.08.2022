import React from "react";
import Pagination from "../buttons/Pagination";
import DeleteButton from "../buttons/DeleteButton";

const BottomTableControls = ({ currentPage, pageCount, onPageChange, onDelete, showDelete }) => {
  return (
    <div className="employee-table-controls">
      <div className="employee-table-bottom-left">
        <DeleteButton 
          onDelete={onDelete} 
          showDelete={showDelete} 
        />
      </div>
      <div className="employee-table-bottom-right">
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default BottomTableControls;
