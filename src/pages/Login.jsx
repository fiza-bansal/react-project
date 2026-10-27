import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../auth";

function Login({onLoginSuccess}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const result = loginUser(
      email.trim().toLowerCase(),
      password
    );

    
if (!result.success) {
  setError(result.message);
  return;
}

onLoginSuccess();
navigate("/skill-track");

  }

  return (
    <main className="page auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login to continue your AlgoArena journey.</p>

        <form onSubmit={handleLogin}>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          /><br></br><br></br>

          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          /><br></br><br></br>

          {error && <p className="auth-error">{error}</p>}

          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/signup"><button>Sign Up</button></Link>
        </p>
      </div>
    </main>
  );
}

export default Login;