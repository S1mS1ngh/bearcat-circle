import { createContext } from "react";

const UserContext = createContext({
    student: null,
    auth: false
});

export default UserContext;
