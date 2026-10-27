import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../auth";

function Signup({onSignupSuccess}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const hasCapital = /[A-Z]/.test(password)
  const hasSmall = /[a-z]/.test(password)
  const hasDigit = /[0-9]/.test(password)
  const hasSpecial = /[^A-Za-z0-9]/.test(password)

  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = signupUser(
      name.trim(),
      email.trim().toLowerCase(),
      password
    );

    if (!result.success) {
  setError(result.message);
  return;
}

onSignupSuccess();
navigate("/skill-track");
  }

  return (
    <main className="page auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join AlgoArena and start your coding journey!</p>

        <form onSubmit={handleSignup}>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            autoComplete="new-password"
            minLength={6}
            required
          />
           <p style={{ color: hasCapital ? "green" : "red" }}>
        At least one capital letter (A-Z)
      </p>

      <p style={{ color: hasSmall ? "green" : "red" }}>
         At least one lowercase letter (a-z)
      </p>

      <p style={{ color: hasDigit ? "green" : "red" }}>
         At least one digit (0-9)
      </p>

      <p style={{ color: hasSpecial ? "green" : "red" }}>
         At least one special character (!@#$...)
      </p>

          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            autoComplete="new-password"
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button
            className="button primary-button"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login"><button>Login</button></Link>
        </p>
      </div>
    </main>
  );
}

export default Signup;