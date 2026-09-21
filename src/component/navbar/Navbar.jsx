import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <span>R</span>
          Ramakant
        </NavLink>

        {/* Navigation */}
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/contact">All-Data</NavLink>
        </div>

        {/* Contact Button */}
        <NavLink to="/contact" className="nav-btn">
          Let's Talk
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
