function SearchFilter(props) {
return ( <div className="search-filter">

  <input
    type="text"
    placeholder="Search employee by name..."
    value={props.search}
    onChange={(event) => props.onSearch(event.target.value)}
  />

  <select
    value={props.department}
    onChange={(event) => props.onDepartmentChange(event.target.value)}
  >
    <option value="All">All Departments</option>
    <option value="Engineering">Engineering</option>
    <option value="HR">HR</option>
    <option value="Marketing">Marketing</option>
    <option value="IT">IT</option>
    <option value="Finance">Finance</option>
  </select>

</div>

);
}

export default SearchFilter;
