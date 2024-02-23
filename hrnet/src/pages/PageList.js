import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Table from "../components/table/Table";
import wave from "../images/wave.png";

const EmployeeList = () => {

  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  return (
    <div className="employee-list-container">
      <header className="container">
        <div className="block-container">
          <div className="btn-back btn-back-1"></div>
          <div className="btn-front creased-text">HRnet</div>
          <div className="hover-text">Wealth Health</div>
        </div>
        <div className="create-employee no-delay ">
          <h2 className="create-employee-shadow">Current Employees</h2>
        </div>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <div className="container-employees">
              <p>Create Employee</p>
            </div>
        </NavLink>
      </header>
      <div className="spacer">
        <div className="shapes-container">
          <div className="circle"></div>
          <div className="square"></div>
          <div className="random-shape"></div>
        </div>
        <Table />
      </div>

      <footer
          className="footer"
          style={{
            height: "44vh",
            backgroundImage: `url(${wave})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center calc(100% + 100px)",
            width: "100%",
          }} >
      </footer>
    </div>
  );
};

export default EmployeeList;
