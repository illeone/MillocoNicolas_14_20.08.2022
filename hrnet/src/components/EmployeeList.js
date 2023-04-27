import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";

const EmployeeList = () => {
  return (
    <div className="employee-list-container">
      <div className="container">
        <div class="block-container">
          <div class="btn-back btn-back-1"></div>
          <div class="btn-front creased-text">HRnet</div>
          <div class="hover-text">Wealth Health</div>
        </div>
        <div className="create-employee no-delay ">
          <h2 className="create-employee-shadow">Current Employees</h2>
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
