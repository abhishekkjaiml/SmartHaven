import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") {
        setError("Email already registered");
      } else if (e.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError("Signup failed. Try again.");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join Air Nest Home</p>

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

        <button className="sign-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
