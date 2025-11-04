'use client'

import { useAuth } from "@/context/AuthContext";


const Dashboard = () => {

    const { userData } = useAuth();

    return (
        <div>
            {userData ? (
                <div className="flex flex-col m-3 text-2xl bg-amber-600 p-3 rounded-2xl border-2
                    ">
                    <div className="sm:flex sm:flex-row ">
                        <p>Name:</p>
                        <p>{userData.user.name}</p>
                    </div>
                    <div className="my-6 sm:flex sm:flex-row">
                        <p>Direction:</p>
                        <p>{userData.user.address}</p>
                    </div>
                    <div className="sm:flex sm:flex-row">
                        <p>Phone Number:</p>
                        <p>{userData.user.phone}</p>
                    </div>
                </div>
            ) : (<></>)
            }
        </div>
    )
}

export default Dashboard;