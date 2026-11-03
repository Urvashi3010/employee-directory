import EmployeeCard from "./EmployeeCard";

function EmployeeList(props) {

  if (props.employees.length === 0) {
  return <p className="no-results">No employees found.</p>;
}
return ( <div className="employee-list">

  {props.employees.map((employee) => (
    <EmployeeCard
      key={employee.id}
      employee={employee}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
    />
  ))}

</div>

);
}

export default EmployeeList;
