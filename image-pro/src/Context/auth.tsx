import { Children, createContext, useState } from "react";

//create context
export const AuthContext = createContext({
    user: null,
    isLoading: false,
});

//create provider
interface AuthProviderProps {
    children: React.ReactEventHandler
}
export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const value = {
        user,
        isLoading
    }
    return <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
}