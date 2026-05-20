import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    // Logic for authentication (e.g., login, logout, check auth status)
    const [user, setUser] = useState(null);

    const login = (response) => {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response)); // Store user data in localStorage
    }

    const dataContext = { user };
    const actionContext = { login };
    return (
        <AuthContext.Provider value={{ ...dataContext, ...actionContext }}>
            {children}
        </AuthContext.Provider>
    );
};