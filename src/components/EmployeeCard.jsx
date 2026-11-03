function EmployeeCard(props) {
return ( <div className="employee-card">

  <img
    src={props.employee.image}
    alt={props.employee.name}
    className="employee-image"
  />

  <h3>{props.employee.name}</h3>

  <p className="employee-id">
    ID: {props.employee.id}
  </p>

  <p>{props.employee.email}</p>

  <p className="department">
    {props.employee.department}
  </p>

  <h4>{props.employee.position}</h4>

  <div className="card-buttons">

    <button
      className="edit-btn"
      onClick={() => props.onEdit(props.employee)}
    >
      Edit
    </button>

    <button
      className="delete-btn"
      onClick={() => props.onDelete(props.employee.id)}
    >
      Delete
    </button>

  </div>

</div>

);
}

export default EmployeeCard;
