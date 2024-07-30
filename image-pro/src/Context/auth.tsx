import { FC, createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Config";

// Create context
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
});

// Create provider
interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        isLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
