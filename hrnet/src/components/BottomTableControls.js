import React from "react";
import Pagination from "./Pagination";

const BottomTableControls = ({ currentPage, pageCount, onPageChange, onDelete, showDelete }) => {
  return (
    <div className="employee-table-controls">
      <div className="employee-table-bottom-left">
        <button
          className="employee-table-button-delete"
          onClick={onDelete}
          style={{
            display: showDelete ? "inline-block" : "none",
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
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default BottomTableControls;
