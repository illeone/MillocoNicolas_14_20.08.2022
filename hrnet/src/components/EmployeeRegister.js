import React, {useState} from 'react'
import { NavLink } from "react-router-dom";

import {states, departments} from '../data/data'
import Modal from './Modal'
import DropDown from './DropDown';
import Dates from './Calendar';

const EmployeeRegister = () => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    })

    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false);
        setEmployee({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
          department: ""
        });
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        })
        console.log(employee)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
      
        if (!employee.firstName || !employee.lastName || !employee.dateOfBirth || !employee.startDate || !employee.street || !employee.city || !employee.state || !employee.zipCode || !employee.department ) {
          alert("Veuillez remplir tous les champs obligatoires.");
        } else {
          localStorage.setItem("employees", JSON.stringify([...employees, employee]));
          setShowModal(true)
        }
      }

return(

<div>
    <div className="container">
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="create-employee"><h2>Create Employee</h2></div>
        <NavLink to={"/List"} style={{ textDecoration: 'none' }}>
            <div className="container-employees">
                <a href="employee-list.html">View Current Employees</a>
            </div>  
        </NavLink> 
    </div>
    <div className="form-container">
         <form onSubmit={handleSubmit}>
             <div className='inputbox first'>
                 <label htmlFor="first-name">First Name</label>
                 <input type="text" id="first-name" name="firstName" onChange={handleChange} value={employee.firstName} /> 
             </div>
             <div className='inputbox last'>
                 <label htmlFor="last-name">Last Name</label>
                 <input type="text" id="last-name" name="lastName" onChange={handleChange} value={employee.lastName} />
             </div>
             <div className='dates'>
                 <div>
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <Dates
                        id="date-of-birth"
                        name="dateOfBirth"
                        value={employee.dateOfBirth}
                        onChange={handleChange}
                    />
                 </div>
                 <div>
                    <label htmlFor="start-date">Start Date</label>
                    <Dates 
                        id="start-date"
                        name="startDate"
                        value={employee.startDate}
                        onChange={handleChange}
                    />
                 </div>
             </div>

             <fieldset className="address">
                 <legend>Address</legend>
                 <div>
                     <label htmlFor="street">Street</label>
                     <input type="text" id="street" name="street" onChange={handleChange} value={employee.street} />
                 </div>
                 <div>
                     <label htmlFor="city">City</label>
                     <input type="text" id="city" name="city" onChange={handleChange} value={employee.city} />
                 </div>
                 <div>
                    <p className="state-label">State</p>
                    <DropDown name="state" 
                            onChange={handleChange} 
                            value={employee.state} 
                            options={states} 
                    />
                 </div>
                 <div>
                     <label htmlFor="zip-code">Zip Code</label>
                     <input type="number" name="zipCode" onChange={handleChange} value={employee.zipCode} />
                 </div>
                 <div>
                     <p className="department-label">Department</p>
                     <DropDown name="department" 
                            onChange={handleChange} 
                            value={employee.department} 
                            options={departments} 
                     />  
                 </div>
             </fieldset>
             <div className='btn-save'>
                 <button type="submit">Save</button>
             </div>
         </form>       
     </div> 
     <Modal showModal={showModal} textContent="Profile created with success !" onClose={handleCloseModal} />
 </div>
)
}

export default EmployeeRegister;