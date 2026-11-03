import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

import initialEmployees from './data/employees';
import SearchFilter from './components/SearchFilter';

function App() {

const [employees, setEmployees] = useState(initialEmployees);

const [editEmployee, setEditEmployee] = useState(null);

const [search, setSearch] = useState("");

const [department, setDepartment] = useState("All");

function addEmployee(employee) {
const newEmployee = {
...employee,
id: Date.now(),
image: employee.image || "https://i.pravatar.cc/150?img=1"
};


setEmployees([...employees, newEmployee]);

}

function handleEdit(employee) {
setEditEmployee(employee);
}

function updateEmployee(updatedEmployee) {
setEmployees(
employees.map((employee) =>
employee.id === updatedEmployee.id
? updatedEmployee
: employee
)
);

setEditEmployee(null);

}

function cancelEdit() {
setEditEmployee(null);
}

function deleteEmployee(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (confirmDelete) {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  }
}

const filteredEmployees = employees.filter((employee) => {
  const matchesName = employee.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesDepartment =
    department === "All" || employee.department === department;

  return matchesName && matchesDepartment;
});

return ( <div className="app">


  <Navbar />

  <header className="header">
    <h1>Employee Directory</h1>
    <p>Manage your team members efficiently.</p>
  </header>

  <EmployeeForm
    onAddEmployee={addEmployee}
    editEmployee={editEmployee}
    onUpdateEmployee={updateEmployee}
    onCancelEdit={cancelEdit}
  />

  <SearchFilter
  search={search}
  onSearch={setSearch}
  department={department}
  onDepartmentChange={setDepartment}
/>

<EmployeeList
  employees={filteredEmployees}
  onEdit={handleEdit}
  onDelete={deleteEmployee}
/>

</div>

);
}

export default App;
