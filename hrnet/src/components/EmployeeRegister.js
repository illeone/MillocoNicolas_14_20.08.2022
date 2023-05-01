import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { states, departments } from "../data/data";
import Modal from "./Modal";
import DropDown from "./DropDown";
import Button from "./Button";
import DateInput from "./DateInput";
import TextInput from "./TextInput";

const EmployeeRegister = () => {
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
            <TextInput
              id="first-name"
              name="firstName"
              value={employee.firstName}
              handleChange={handleChange}
              labelText="First Name"
              labelClassName="first-name-label"
              inputClassName="first"
              error={!employee.firstName}
              isSubmitted={isSubmitted}
            />
          </div>
          <div className="inputbox last">
            <TextInput
              id="last-name"
              name="lastName"
              value={employee.lastName}
              handleChange={handleChange}
              labelText="Last Name"
              labelClassName="last-name-label"
              inputClassName="first"
              error={!employee.lastName}
              isSubmitted={isSubmitted}
            />
          </div>
          <div className="dates">
            <DateInput
              id="date-of-birth"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              handleChange={handleChange}
              labelText="Date of Birth"
              labelClassName="date-of-birth-label"
              inputClassName="date-of-birth"
              error={!employee.dateOfBirth}
              isSubmitted={isSubmitted}
            />

            <DateInput
              id="start-date"
              name="startDate"
              value={employee.startDate}
              handleChange={handleChange}
              labelText="Start Date"
              labelClassName="start-date-label"
              inputClassName="start-date"
              error={!employee.startDate}
              isSubmitted={isSubmitted}
            />
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <TextInput
              id="street"
              name="street"
              value={employee.street}
              handleChange={handleChange}
              labelText="Street"
              labelClassName="street-label"
              inputClassName="street"
              error={!employee.street}
              isSubmitted={isSubmitted}
            />
            <div>
              <TextInput
                id="city"
                name="city"
                value={employee.city}
                handleChange={handleChange}
                labelText="City"
                labelClassName="city-label"
                inputClassName="city"
                error={!employee.city}
                isSubmitted={isSubmitted}
              />
            </div>
            <div>
              <p className="state-label">State</p>
              <DropDown
                name="state"
                onChange={handleChange}
                options={states}
                value={employee.state}
                isSubmitted={isSubmitted}
              />
            </div>
            <div>
              <TextInput
                id="zip-code"
                name="zipCode"
                value={employee.zipCode}
                handleChange={handleChange}
                labelText="Zip Code"
                labelClassName="zip-code-label"
                inputClassName="zipCode"
                error={!employee.zipCode}
                isSubmitted={isSubmitted}
                type="number" // type 'number' pour le champ 'Zip Code'
              />
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