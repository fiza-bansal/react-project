import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../auth";

function Navbar({ isDarkMode, onToggleTheme,onLogout,isLoggedIn }) {
  const getLinkClass = ({ isActive }) => (isActive ? "active" : "");
  const user = isLoggedIn ? getCurrentUser() : null;
  const navigate = useNavigate();

  function handleLogout() {
  logoutUser();
  onLogout();
  navigate("/login");
}

  return (
    <header className="navbar">
      <Link className="nav-logo" to="/">
        <span className="bracket">&#123;</span>
        Algo Arena
        <span className="bracket">&#125;</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end className={getLinkClass}>Home</NavLink>
        <NavLink to="/problems" className={getLinkClass}>Problems</NavLink>
        <NavLink to="/discussion" className={getLinkClass}>Discuss</NavLink>
        <NavLink to="/skill-track" className={getLinkClass}>Skill Track</NavLink>
        <NavLink to="/battle" className={getLinkClass}>Battleground</NavLink>

        {user ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className={getLinkClass}>Login</NavLink>
            <NavLink to="/signup" className={getLinkClass}>Sign Up</NavLink>
          </>
        )}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        onClick={onToggleTheme}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Navbar;
