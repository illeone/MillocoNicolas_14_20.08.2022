import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DropDown({ options, onChange, value, name, isSubmitted }) {
  const listOptions = options.map((option, index) => (
    <MenuItem key={index} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  const isError = isSubmitted && !value;
  const isSuccess = value && isSubmitted;

  return (
    <FormControl fullWidth>
      <Select
        id={`select-${name}`}
        value={value}
        onChange={onChange}
        name={name}
        className={`inputbox ${isError ? "error-input error" : ""} ${
          isSuccess ? "success" : ""
        }`}
      >
        {listOptions}
      </Select>
      {isError && (
        <span
          className="error-text"
          style={{
            color: "red",
            fontSize: "0.6rem",
            marginLeft: "5px",
            marginTop: "-1rem",
            paddingBottom: "1.5rem",
            display: "block",
          }}
        >
          * This field is required
        </span>
      )}
    </FormControl>
  );
}

export default DropDown;
