import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { states, departments } from "../data/data";
import Modal from "./Modal";
import DropDown from "./DropDown";
import Dates from "./Calendar";
import Button from "./Button";

const EmployeeRegister = () => {
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const labels = document.querySelectorAll("label[for], .state-label");
      const sectionPositions = [
        { label: "last-name", position: 30 },
        { label: "date-of-birth", position: 140 },
        { label: "start-date", position: 140 },
        { label: "street", position: 280 },
        { label: "city", position: 330 },
        { label: "state-label", position: 440 },
      ];

      labels.forEach((label) => {
        const labelFor = label.getAttribute("for") || label.className;
        const section = sectionPositions.find(
          (section) => section.label === labelFor
        );
        if (section && scrollPosition > section.position) {
          label.style.color = "#6c6c6c";
        } else if (labelFor !== "first-name") {
          label.style.color = "white";
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
    console.log(employee);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(employee);
    // Vérifier que toutes les propriétés sont remplies
    if (
      !employee.firstName ||
      !employee.lastName ||
      !employee.dateOfBirth ||
      !employee.startDate ||
      !employee.street ||
      !employee.city ||
      !employee.state ||
      !employee.zipCode ||
      !employee.department
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      // Utiliser toISOString pour convertir les dates avant de les enregistrer
      const updatedEmployee = {
        ...employee,
        dateOfBirth: employee.dateOfBirth
          ? employee.dateOfBirth.toISOString().substring(0, 10)
          : "",
        startDate: employee.startDate
          ? employee.startDate.toISOString().substring(0, 10)
          : "",
      };

      localStorage.setItem(
        "employees",
        JSON.stringify([...employees, updatedEmployee])
      );
      setIsOpen(true);
    }
  };

  const handleModalOk = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="create-employee">
          <h2>Create Employee</h2>
        </div>
        <NavLink to={"/List"} style={{ textDecoration: "none" }}>
          <div className="container-employees">
            <a href="employee-list.html">View Current Employees</a>
          </div>
        </NavLink>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="inputbox first">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              onChange={handleChange}
              value={employee.firstName}
              className={`inputbox first ${isSubmitted && !employee.firstName ? "error-input error" : ""} ${employee.firstName && isSubmitted ? "success" : ""}`}
            />
            {isSubmitted && !employee.firstName && (
                <span className="error-text" style={{color: "red", fontSize: "0.6rem", marginLeft: "3rem", marginTop:"-10px", marginTop: "-2.2rem",paddingBottom:"1.5rem", display: "block"  }}>* This field is required</span>
              )}
          </div>
          <div className="inputbox last">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              onChange={handleChange}
              value={employee.lastName}
              className={`inputbox first ${isSubmitted && !employee.lastName ? "error-input error" : ""} ${employee.lastName && isSubmitted ? "success" : ""}`}
            />
            {isSubmitted && !employee.lastName && (
                    <span className="error-text" style={{color: "red", fontSize: "0.6rem", marginLeft: "3rem", marginTop:"-10px", marginTop: "-2.2rem",paddingBottom:"1.5rem", display: "block"  }}>* This field is required</span>
                )}
          </div>
          <div className="dates">
            <div>
              <label htmlFor="date-of-birth">Date of Birth</label>
              <Dates
                id="date-of-birth"
                value={employee.dateOfBirth}
                onChange={handleChange}
                isSubmitted={isSubmitted}
              />
            </div>
            <div>
              <label htmlFor="start-date">Start Date</label>
              <Dates
                id="start-date"
                name="startDate"
                value={employee.startDate}
                onChange={handleChange}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                onChange={handleChange}
                value={employee.street}
                className={`inputbox street ${isSubmitted && !employee.street ? "error-input error" : ""} ${employee.street && isSubmitted ? "success" : ""}`}
              />
              {isSubmitted && !employee.street && (
                            <span className="error-text" style={{color: "red", fontSize: "0.6rem", marginLeft: "5px", marginTop:"-10px", marginTop: "-2.2rem",paddingBottom:"1.5rem", display: "block"  }}>* This field is required</span>
                        )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                value={employee.city}
                className={`inputbox city ${isSubmitted && !employee.city ? "error-input error" : ""} ${employee.city && isSubmitted ? "success" : ""}`}
              />
              {isSubmitted && !employee.city && (
                            <span className="error-text" style={{color: "red", fontSize: "0.6rem", marginLeft: "5px", marginTop:"-10px", marginTop: "-2.2rem",paddingBottom:"1.5rem", display: "block"  }}>* This field is required</span>
                        )}
            </div>
            <div>
              <p className="state-label">State</p>
              <DropDown
                name="state"
                onChange={handleChange}
                value={employee.state}
                options={states}
                isSubmitted={isSubmitted}
              />
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                type="number"
                name="zipCode"
                onChange={handleChange}
                value={employee.zipCode}
                className={`inputbox zipCode ${isSubmitted && !employee.zipCode ? "error-input error" : ""} ${employee.zipCode && isSubmitted ? "success" : ""}`}
              />
              {isSubmitted && !employee.zipCode && (
                            <span className="error-text" style={{color: "red", fontSize: "0.6rem", marginLeft: "8px", marginTop:"-10px", marginTop: "-2.2rem",paddingBottom:"1.5rem", display: "block"  }}>* This field is required</span>
                        )}
            </div>
            <div>
              <p className="department-label">Department</p>
              <DropDown
                name="department"
                onChange={handleChange}
                value={employee.department}
                options={departments}
                isSubmitted={isSubmitted}
              />
            </div>
          </fieldset>
          <div className="btn-save">
            <Button type="submit" onClick={handleSubmit} text="Save" />
          </div>
        </form>
      </div>
      <Modal
        isOpen={isOpen}
        btnOk={true}
        // btnCancelAction={() => console.log("click sur annulé")}
        btnOkAction={handleModalOk}
        title="Thank You !"
        description="Profile created with success !"
      />
    </div>
  );
};

export default EmployeeRegister;
