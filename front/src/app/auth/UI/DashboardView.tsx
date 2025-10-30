'use client'

import { useAuth } from "@/context/AuthContext"

const DashboardView = () => {
    const {userData} = useAuth();

    return (
        <div>
            <h1>Bienvenido: {userData?.user.name}</h1>
            <p>Direccion: {userData?.user.address}</p>
            <p>Email: {userData?.user.email}</p>
        </div>
    )
}

export default DashboardView;