import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        if (result.status === 201) navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please use a different email.");
        } else {
          console.error(err);
        }
      });
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const formStyle = {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  const fieldStyle = {
    position: "relative",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 10px 10px 0",
    border: "2px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  };

  const labelStyle = {
    position: "absolute",
    top: "-10px",
    left: "10px",
    fontSize: "15px",
    background: "#f9f9f9",
    padding: "0 5px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const linkStyle = {
    marginTop: "10px",
    textAlign: "center",
    color: "#007bff",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSignup} style={formStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
        <p> Already have an account?
        <Link to="/login" style={linkStyle}>
           Login here
        </Link></p>
      </form>
    </div>
  );
}

export default SignUp;
