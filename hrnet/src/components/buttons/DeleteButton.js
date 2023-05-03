import React from "react";

const DeleteButton = ({ onDelete, showDelete }) => (
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
);

export default DeleteButton;
