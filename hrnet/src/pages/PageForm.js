import React, { useEffect } from 'react';
import EmployeeRegister from '../components/form/EmployeeRegister';
import ScrollLabel from '../components/form/ScrollLabel';

const PageRegister = () => {

  useEffect(() => {
    document.title = "HRnet - Create Employee";
  }, []);

  return (
    <div>
      <ScrollLabel />
      <EmployeeRegister />
    </div>
  );
};

export default PageRegister;
