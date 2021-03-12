import React, { useContext } from "react";
import "../styles/UserProfile.css";
import UserContext from "../../contexts/userContext";

const UserProfile = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div className="user-profile">
            <h1>Welcome {user.username}!</h1>
            <p>You're logged in now!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;
