import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    employee.id = Date.now();
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    // localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (employeeIds) => {
    const updatedEmployees = employees.filter(emp => !employeeIds.includes(emp.id));
    setEmployees(updatedEmployees);
    // localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // useEffect(() => {
  //   localStorage.setItem('employees', JSON.stringify(employees));
  // }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
