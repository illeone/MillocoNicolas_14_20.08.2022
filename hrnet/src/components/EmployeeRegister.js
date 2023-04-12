import React, {useState} from 'react'
import {states, departments} from '../data/data'

const EmployeeRegister = () => {

    const optionsState = states.map((state, index) => 
        <option key={index} value={state.value}>{state.label}</option>
    )
    const optionsDepartments = departments.map((department, index) => 
        <option key={index} value={department.value}>{department.label}</option>
    )

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
        }
      }

return(

<div>
    <div className="container">
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="create-employee"><h2>Create Employee</h2></div>
        <div className="container-employees">
            <a href="employee-list.html">View Current Employees</a>
        </div>   
    </div>
    <div className="form-container">
         <form onSubmit={handleSubmit}>
             <div className='inputbox first'>
                 <label htmlFor="first-name">First Name</label>
                 <input type="text" id="first-name" name="firstName" onChange={handleChange} /> 
             </div>
             <div className='inputbox last'>
                 <label htmlFor="last-name">Last Name</label>
                 <input type="text" id="last-name" name="lastName" onChange={handleChange} />
             </div>
             <div className='dates'>
                 <div>
                     <label htmlFor="date-of-birth">Date of Birth</label>
                     <input type="date" id="date-of-birth" name="dateOfBirth" onChange={handleChange} />
                 </div>
                 <div>
                     <label htmlFor="start-date">Start Date</label>
                     <input type="date" id="start-date" name="startDate" onChange={handleChange} />
                 </div>
             </div>

             <fieldset className="address">
                 <legend>Address</legend>
                 <div>
                     <label htmlFor="street">Street</label>
                     <input type="text" id="street" name="street" onChange={handleChange} />
                 </div>
                 <div>
                     <label htmlFor="city">City</label>
                     <input type="text" id="city" name="city" onChange={handleChange} />
                 </div>
                 <div>
                    <label htmlFor="state-label">State</label>
                    <select name="state" id="state" onChange={handleChange} >
                        <option>Please select a state</option>
                        {optionsState}
                    </select>
                 </div>
                 <div>
                     <label htmlFor="zip-code">Zip Code</label>
                     <input type="number" name="zipCode" onChange={handleChange} />
                 </div>
                 <div>
                     <label htmlFor="department-label">Department</label>
                     <select name="department" id="department" onChange={handleChange} >
                        <option>Please select a department</option>
                        {optionsDepartments}
                     </select>
                 </div>
             </fieldset>
             <div className='btn-save'>
                 <button type="submit">Save</button>
             </div>
         </form>       
     </div> 
 </div>
)
}

export default EmployeeRegister;