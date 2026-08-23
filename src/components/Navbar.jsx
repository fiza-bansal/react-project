import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // NavLink adds the active class so the current page is easy to spot.
  const getLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="navbar">
      <Link className="nav-logo" to="/">
        <span className="bracket">&#123;</span>Algo Arena<span className="bracket">&#125;</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end className={getLinkClass}>Home</NavLink>
        <NavLink to="/problems" className={getLinkClass}>Problems</NavLink>
        <NavLink to="/discussion" className={getLinkClass}>Discuss</NavLink>
        <NavLink to="/skill-track" className={getLinkClass}>Skill Track</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
