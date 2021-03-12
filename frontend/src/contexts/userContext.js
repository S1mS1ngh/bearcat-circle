import { createContext } from "react";

const UserContext = createContext({
    user: null,
    hasLoginError: false,
    login: () => null,
    logout: () => null
});

export default UserContext;
