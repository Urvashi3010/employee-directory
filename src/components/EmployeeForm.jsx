import { useState, useEffect } from 'react';

function EmployeeForm(props) {

const [formData, setFormData] = useState({
name: "",
email: "",
department: "",
position: "",
image: ""
});

useEffect(() => {
if (props.editEmployee) {
setFormData({
name: props.editEmployee.name,
email: props.editEmployee.email,
department: props.editEmployee.department,
position: props.editEmployee.position,
image: props.editEmployee.image
});
}
}, [props.editEmployee]);

function handleChange(event) {
const { name, value } = event.target;

setFormData({
  ...formData,
  [name]: value
});

}

function handleSubmit(event) {
event.preventDefault();


if (props.editEmployee) {
  props.onUpdateEmployee({
    ...formData,
    id: props.editEmployee.id
  });
} else {
  props.onAddEmployee(formData);
}

setFormData({
  name: "",
  email: "",
  department: "",
  position: "",
  image: ""
});

}

return ( <div className="employee-form">

```
  <h2>
    {props.editEmployee ? "Edit Employee" : "Add New Employee"}
  </h2>

  <form onSubmit={handleSubmit}>

    <input
      type="text"
      name="name"
      placeholder="Employee Name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <input
      type="text"
      name="department"
      placeholder="Department"
      value={formData.department}
      onChange={handleChange}
      required
    />

    <input
      type="text"
      name="position"
      placeholder="Job Position"
      value={formData.position}
      onChange={handleChange}
      required
    />

    <input
      type="text"
      name="image"
      placeholder="Profile Image URL"
      value={formData.image}
      onChange={handleChange}
    />

    <button type="submit">
      {props.editEmployee ? "Update Employee" : "Add Employee"}
    </button>

    {props.editEmployee && (
      <button
        type="button"
        onClick={props.onCancelEdit}
      >
        Cancel
      </button>
    )}

  </form>

</div>


);
}

export default EmployeeForm;
