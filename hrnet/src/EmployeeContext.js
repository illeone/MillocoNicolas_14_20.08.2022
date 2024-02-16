import React, { createContext, useContext, useState, useEffect } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });

  let employeeIdCounter = 0;

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: ++employeeIdCounter };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
    localStorage.setItem('employees', JSON.stringify(newEmployee));
  };  

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees,addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
