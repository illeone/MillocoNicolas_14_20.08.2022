const EmployeeRegister = () => {

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
         <form>
             <div className='inputbox first'>
                 <label htmlFor="first-name">First Name</label>
                 <input type="text" id="first-name" name="firstName"  /> 
             </div>
             <div className='inputbox last'>
                 <label htmlFor="last-name">Last Name</label>
                 <input type="text" id="last-name" name="lastName" />
             </div>
             <div className='dates'>
                 <div>
                     <label htmlFor="date-of-birth">Date of Birth</label>
                     <input type="date" id="date-of-birth" name="dateOfBirth" />
                 </div>
                 <div>
                     <label htmlFor="start-date">Start Date</label>
                     <input type="date" id="start-date" name="startDate"/>
                 </div>
             </div>

             <fieldset className="address">
                 <legend>Address</legend>
                 <div>
                     <label htmlFor="street">Street</label>
                     <input type="text" id="street" name="street" />
                 </div>
                 <div>
                     <label htmlFor="city">City</label>
                     <input type="text" id="city" name="city" />
                 </div>
                 <div>
                 <p className="state-label">State</p>
                     <select name="state"/>
                 </div>
                 <div>
                     <label htmlFor="zip-code">Zip Code</label>
                     <input type="number" name="zipCode" />
                 </div>
                 <div>
                 <p className="department-label">Department</p>
                     <select name="department"/>
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