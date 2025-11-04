'use client'

import Order from "@/app/components/Order/Order";
import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/types";
import { getOrders } from "@/services/orders.services";
import { useEffect, useState } from "react";

function OrderList() {

    const { userData } = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchOrders = async () => {
            if (!userData?.token) {
                setOrders([])
                return;
            }
            setIsLoading(true)
            setError(null)

            try {
                const orderResponse = await getOrders(userData.token)
                setOrders(orderResponse)
            } catch (error) {
                console.log("Error:", error);
                setError(`Error ${error}`)
                setOrders([])
            } finally {
                setIsLoading(false)
            }
        };

        fetchOrders();
    }, [userData?.token])

    return (
        <div>
            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            )}

            {isLoading ? (
                <div>
                    <p>Loading orders...</p>
                </div>
            ) : orders && orders.length > 0 ? (
                <div className="p-3 ">
                    {orders.length ? orders.map((order: IOrder) => {
                        return (
                            <Order key={order.id} {...order} />
                        )
                    }) : (
                        <div></div>
                    )}
                </div>
            ) : (
                <div className="sm:h-100 sm:flex sm:justify-center sm:mt-50 sm:text-6xl
                    flex justify-center h-75 mt-50 text-2xl">
                    There are no orders
                </div>
            )}



        </div>

    )
}

export default OrderList;