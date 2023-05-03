import React from "react";
import DropDown from "../buttons/DropDown";
import SearchBar from "../buttons/Search";

const TopTableControls = ({ pageSize, onPageSizeChange, onSearch }) => {
  return (
    <div className="employee-table-controls">
      <div className="employee-table-top-left">
        <label htmlFor="pageSize" className="search-entries">
          Show entries:{" "}
        </label>
        <div className="custom-select-wrapper">
          <DropDown
            options={[
              { value: 5, label: "5" },
              { value: 10, label: "10" },
              { value: 20, label: "20" },
            ]}
            onChange={(event) => {
              onPageSizeChange(Number(event.target.value));
            }}
            value={pageSize}
            name="pageSize"
            submit={false}
          />
        </div>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default TopTableControls;
