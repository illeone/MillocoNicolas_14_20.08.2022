import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Dates({ onChange, value, isSubmitted }) {
  const [date, setDate] = useState(value);

  const isError = isSubmitted && !date;
  const isSuccess = date && isSubmitted;

  return (
    <div
      className={`inputbox ${isError ? "error-input input-error" : ""} ${
        isSuccess ? "success" : ""
      }`}
    >
      <Calendar
        className="my-calendar"
        value={value}
        onChange={(e) => {
          setDate(e.value);
          onChange(e);
        }}
      />
      {isError && (
        <span className="error-text-date">* This field is required</span>
      )}
    </div>
  );
}
