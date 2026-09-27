import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../css/Register.css";
import logo from "../assets/WorkTag.png";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Password show / hide
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login");

      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <div className="register-page">

      {/* Background Decorations */}

      <div className="register-circle circle-one"></div>
      <div className="register-circle circle-two"></div>
      <div className="register-circle circle-three"></div>

      <div className="dot-pattern dots-one"></div>
      <div className="dot-pattern dots-two"></div>

      <div className="floating-dot dot-one"></div>
      <div className="floating-dot dot-two"></div>


      {/* CENTER CARD */}

      <div className="register-card">


        {/* Logo */}

        <div className="register-card-top">

          <img
            src={logo}
            alt="WorkTag"
            className="register-logo"
          />

          <span className="workspace-badge">
            ✦ Your workspace
          </span>

        </div>


        {/* Heading */}

        <div className="register-heading">

          <h1>Create Account</h1>

          <p>
            Start organizing your work with WorkTag.
          </p>

        </div>


        {/* Form */}

        <form onSubmit={handleRegister}>


          {/* Name */}

          <div className="register-input-group">

            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          {/* Email */}

          <div className="register-input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* Password */}

          <div className="register-input-group">

            <FaLock className="input-icon" />

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
              className="register-password-eye"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >

              {showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}

            </button>

          </div>


          {/* Button */}

          <button
            type="submit"
            className="register-button"
          >

            <span>Create Account</span>

            <FaArrowRight />

          </button>

        </form>


        {/* Message */}

        {message && (
          <p className="register-message">
            {message}
          </p>
        )}


        {/* Login */}

        <div className="login-link">

          <span>Already have an account?</span>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;