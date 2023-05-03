import React from 'react';

const CustomLabel = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default CustomLabel;
