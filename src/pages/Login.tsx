import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e: any) {
      if (e.code === "auth/user-not-found") {
        setError("User not found");
      } else if (e.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else if (e.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError("Login failed. Try again.");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>SmartHaven</h2>
        <p className="subtitle">Sign in to your smart home</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="sign-btn" onClick={handleLogin}>
          Sign In
        </button>

        <p className="switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
