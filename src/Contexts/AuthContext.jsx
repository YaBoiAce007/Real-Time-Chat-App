import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <authContext.Provider value={
            {
                user,
                setUser,
                isAuthenticated,
                setIsAuthenticated
            }
        }>
            {children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}