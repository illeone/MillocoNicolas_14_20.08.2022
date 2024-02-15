import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
