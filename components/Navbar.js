import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "7px",
    backgroundColor: "#333",
    color: "#fff",
  };

  const buttonStyle = {
    marginRight: "20px",
    fontSize: "1rem",
    fontWeight: "700",
    padding: "1rem 2rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={navbarStyle}>
      <h1>MERN Stack</h1>
      <div>
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button style={{ ...buttonStyle, backgroundColor: "#007BFF", color: "#fff" }}>
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button style={{ ...buttonStyle, backgroundColor: "#28A745", color: "#fff" }}>
                Signup
              </button>
            </Link>
          </>
        ) : (
          <Logout setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
