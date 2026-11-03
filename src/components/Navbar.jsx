function Navbar() {
return ( <nav className="navbar"> <div className="logo"> <h2>TeamSpace</h2> </div>

  <div className="nav-right">
    <span className="admin-name">Admin</span>

    <button className="add-btn">
      + Add Employee
    </button>
  </div>
</nav>


);
}

export default Navbar;
