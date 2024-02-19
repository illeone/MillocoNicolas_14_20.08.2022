import React from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


const DateInput = ({
  id,
  name,
  value,
  handleChange,
  labelText,
  labelClassName,
  inputClassName,
  error,
  isSubmitted,
}) => {
  const isError = isSubmitted && error;
  const isSuccess = value && isSubmitted;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>{labelText}</label>
        <div
          className={`
              inputbox ${inputClassName} 
              ${isError ? "error-input input-error" : ""} 
              ${isSuccess ? "success" : ""}
          `}
        >
        <Calendar
          inputId={id}
          name={name}
          value={value}
          className="my-calendar"
          onChange={(e) => handleChange({ target: { name, value: e.value } })}
        />
        {isError && <span className="error-text-date">* This field is required</span>}
      </div>
    </div>
  );
};

export default DateInput;
