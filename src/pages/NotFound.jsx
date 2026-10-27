import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page auth-page">
      <div className="auth-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>

        <Link to="/" className="button primary-button">
          Go to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;