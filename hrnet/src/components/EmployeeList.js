import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";

const EmployeeList = () => {
  return (
    <div className="employee-list-container">
      <div className="container">
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="create-employee">
          <h2>Current Employees</h2>
        </div>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <div className="container-employees">
            <a href="employee-list.html">Create Employee</a>
            </div>
        </NavLink>
      </div>
      <div>
        <Table />
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default EmployeeList;
