import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            username: "jayesh",
            name: "Jayesh",
        })
    }

    const logout = () => {
        setUser(null);
    }

    return <UserContext.Provider value={{
        user,
        login,
        logout
    }}>
        {children}
    </UserContext.Provider>
}