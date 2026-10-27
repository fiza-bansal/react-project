import { useState } from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Discussion from "./pages/Discussion";
import SkillTrack from "./pages/SkillTrack";
import ProblemDetails from "./pages/ProblemDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { getCurrentUser } from "./auth";
import Battle from "./pages/Battle";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getCurrentUser()
  );

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function handleLogoutSuccess() {
    setIsLoggedIn(false);
  }

  return (
    <div className={`app-shell ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => {
  setIsDarkMode((mode) => {
    const newMode = !mode;
    localStorage.setItem("theme", newMode ? "dark" : "light");
    return newMode;
  });
}}
        onLogout={handleLogoutSuccess}
        isLoggedIn={isLoggedIn}
      />
      
      {/* Each route connects a URL path to one page component. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetails />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/battle" element={<Battle />} />
        <Route
          path="/login"
          element={
            <Login onLoginSuccess={handleLoginSuccess} />
          }
        />

        <Route
          path="/signup"
          element={
            <Signup onSignupSuccess={handleLoginSuccess} />
          }
        />

        <Route
          path="/skill-track"
          element={
            isLoggedIn ? (
              <SkillTrack />
            ) : (
              <Navigate to="/login" replace />
            )
          }
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
