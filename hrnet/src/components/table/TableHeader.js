import Checkbox from "../buttons/Checkbox";

const TableHeader = ({ selectAll, handleSelectAll, renderTableHeader }) => {
    return (
      <thead>
        <tr>
          <th className="col-select" onClick={handleSelectAll}>
            <Checkbox
              id="select-all"
              checked={selectAll}
              onChange={handleSelectAll}
            />
          </th>
          {renderTableHeader("First Name", "firstName")}
          {renderTableHeader("Last Name", "lastName")}
          {renderTableHeader("Start Date", "startDate")}
          {renderTableHeader("Department", "department")}
          {renderTableHeader("Date of Birth", "birthDate")}
          {renderTableHeader("Street", "street")}
          {renderTableHeader("City", "city")}
          {renderTableHeader("State", "state")}
          {renderTableHeader("Zip Code", "zipCode")}
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;