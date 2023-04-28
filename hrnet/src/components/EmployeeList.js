import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";
import wave from "../wave.png";

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

      <footer
        className="footer"
        style={{
          left: 0,
          bottom: -3,
          height: "208px",
          backgroundImage: `url(${wave})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          }} >
        </footer>
    </div>
  );
};

export default EmployeeList;
