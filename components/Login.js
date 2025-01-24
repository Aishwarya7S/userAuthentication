import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password }, { withCredentials: true })
      .then((response) => {
        if (response.data === "Success") {
          navigate("/home");
        } else {
          window.alert("Invalid credentials");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          window.alert("Password doesn't match");
        } else if (err.response && err.response.status === 404) {
          window.alert("No Records found");
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
    border: "2px solid #ccc",
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
    border: "1px solid #ccc",
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
    backgroundColor: "#007bff",
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
      <form onSubmit={handleLogin} style={formStyle}>
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
          Login
        </button>
        <p>Don't have an account? 
        <Link to="/signup" style={linkStyle}>
          Signup now
        </Link></p>
      </form>
    </div>
  );
}

export default Login;
