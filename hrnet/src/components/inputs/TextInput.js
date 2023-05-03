import React from "react";
import CustomLabel from "../form/CustomLabel";

const TextInput = ({
  id,
  name,
  value,
  handleChange,
  labelText,
  labelClassName,
  inputClassName,
  error,
  isSubmitted,
  type = "text", // prop 'type' avec une valeur par défaut de 'text'
}) => {
  return (
    <div className="inputbox">
      <CustomLabel htmlFor={id} className={labelClassName}>
        {labelText}
      </CustomLabel>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className={`inputbox ${inputClassName} ${
          isSubmitted && error ? "error-input error" : ""
        } ${value && isSubmitted ? "success" : ""}`}
      />
      {isSubmitted && error && (
        <span
          className="error-text"
          style={{
            color: "red",
            fontSize: "0.6rem",
            marginLeft: labelText === "First Name" || labelText === "Last Name" ? "3rem" : "0.3rem",
            marginTop: "-2.2rem",
            paddingBottom: "1.5rem",
            display: "block",
          }}
        >
          * This field is required
        </span>
      )}
    </div>
  );
};

export default TextInput;
