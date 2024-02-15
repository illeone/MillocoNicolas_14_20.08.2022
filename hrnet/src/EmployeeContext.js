import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  let employeeIdCounter = 0;

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: ++employeeIdCounter };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };  

  return (
    <EmployeeContext.Provider value={{ employees,addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
