import React from "react";
import UserContext from "./userContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ name: '', auth: false });

    const login = (name) => {
        setUser(() => ({
            name: name,
            auth: true,
        }));
    };

    const logout = () => {
        setUser((user) => ({
            name: '',
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