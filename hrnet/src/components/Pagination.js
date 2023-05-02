// import React from "react";

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
    return (
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &laquo;
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            className={`pagination-button${currentPage === index ? " active" : ""}`}
            onClick={() => onPageChange(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageCount - 1}
        >
          &raquo;
        </button>
      </div>
    );
  };
  
  export default Pagination;
  