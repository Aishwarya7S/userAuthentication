import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
            .then(() => {
                navigate("/login");
            })
            .catch(err => {
                console.error("Logout failed", err);
            });
    };

    const containerStyle = { textAlign: "center", marginTop: "2rem" };
    const buttonStyle = { marginTop: '1rem', padding: '1rem 2rem',  fontSize: '17px', backgroundColor: '#FF3B3B', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' };

    return (
        <div style={containerStyle}>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleLogout} style={buttonStyle}>
                Logout
            </button>
        </div>
    );
}

export default Home;
