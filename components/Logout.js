import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    navigate('/signin'); 
                }
            })
            .catch(error => {
                console.error("Error during logout:", error);
            });
    }
};

    const buttonStyle = { marginRight: '20px', fontSize: '1rem', padding: '1rem 2rem', backgroundColor: '#FF3B3B', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' };

    return (
        <button style={buttonStyle} onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
