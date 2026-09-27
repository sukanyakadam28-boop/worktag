import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../css/Login.css";
import logo from "../assets/WorkTag.png";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

     if (response.ok) {
  setMessage("Login successful!");

  localStorage.setItem("user", JSON.stringify(data.user));

  setTimeout(() => {
    navigate("/dashboard");
  }, 1000);
} else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="login-page">

      {/* Background Decorations */}

      <div className="login-circle login-circle-one"></div>
      <div className="login-circle login-circle-two"></div>
      <div className="login-circle login-circle-three"></div>

      <div className="login-dots login-dots-one"></div>
      <div className="login-dots login-dots-two"></div>

      <div className="login-floating-dot login-dot-one"></div>
      <div className="login-floating-dot login-dot-two"></div>


      {/* Login Card */}

      <div className="login-card">


        {/* Card Top */}

        <div className="login-card-top">

          <img
            src={logo}
            alt="WorkTag"
            className="login-logo"
          />

          <span className="login-workspace-badge">
            ✦ Your workspace
          </span>

        </div>


        {/* Heading */}

        <div className="login-heading">

          <h1>Welcome Back</h1>

          <p>
            Sign in to continue working with WorkTag.
          </p>

        </div>


        {/* Form */}

        <form onSubmit={handleLogin}>


          {/* EMAIL */}

          <div className="login-input-group">

            <FaEnvelope className="login-input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="login-input-group">

            <FaLock className="login-input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="login-password-eye"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="login-button"
          >

            <span>Login</span>

            <FaArrowRight />

          </button>

        </form>


        {/* Message */}

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}


        {/* Register Link */}

        <div className="register-link">

          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;