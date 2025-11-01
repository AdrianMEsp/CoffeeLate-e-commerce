'use client'

import { useAuth } from "@/context/AuthContext";
import { IOrder, IProduct } from "@/types";
import { getOrders } from "@/utils/orders.helper";
import { useEffect, useState } from "react";

const OrdersPage = () => {

    const { userData } = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);

    const handleGetOrders = async () => {
        if (userData?.token) {
            const response = await getOrders(userData?.token)
            setOrders(response)
        }
    }

    useEffect(() => {
        handleGetOrders();
    }, [userData])

    return (
        <div>
            <div>
                {orders.length ? orders.map((order: IOrder) => {
                    return (
                        <div key={order.id}>
                            <p>Order: {order.id}</p>
                            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                            <p>Status: {order.status}</p>
                            {
                                order.products.map((product) => {
                                    return (
                                        <div key={product.id}>
                                            <p>{product.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }) : (
                    <div>No hay ordenes</div>
                )}
            </div>
        </div>
    )
}

export default OrdersPage;
