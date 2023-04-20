import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DropDown({ options, onChange, value, name }) {
  const listOptions = options.map((option, index) => (
    <MenuItem key={index} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={onChange}
        name={name}
        className="inputbox"
      >
        {listOptions}
      </Select>
    </FormControl>
  );
}

export default DropDown;