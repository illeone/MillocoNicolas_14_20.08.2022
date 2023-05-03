import React from 'react';
import EmployeeRegister from '../components/form/EmployeeRegister';
import ScrollLabel from '../components/form/ScrollLabel';

const PageRegister = () => {
  return (
    <div>
      <ScrollLabel />
      <EmployeeRegister />
    </div>
  );
};

export default PageRegister;
