import React from "react";
import UserContext from "./userContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ student: null, auth: false });

    const login = (data) => {
        setUser(() => ({
            student: data,
            auth: true,
        }));
    };

    const logout = () => {
        setUser(() => ({
            student: null,
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;