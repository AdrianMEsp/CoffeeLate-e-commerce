'use client'

import { IUserSession } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, createContext, useState, useEffect } from "react"

export interface IAuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData : IUserSession | null) => void
    logout: () => void
}

export const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => {},
    logout: () => {}
});

export interface AuthProviderProps{
    children : React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserSession | null>(null);
    const router = useRouter();
    
    useEffect(() => {
        if(userData){
            localStorage.setItem("userSession", JSON.stringify({token: userData.token, user: userData.user}))
        }
    }, [userData])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userSession")!)
        setUserData(data)
    }, [])

    const logout = () => {
        setUserData(null)
        localStorage.removeItem("userSession")
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)