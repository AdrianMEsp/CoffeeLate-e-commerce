'use client'

import Order from "@/app/components/Order/Order";
import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/types";
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
            <div className="p-3 ">
                {orders.length ? orders.map((order: IOrder) => {
                    return (
                        <Order key={order.id} {...order}/>
                    )
                }) : (
                    <div>No hay ordenes</div>
                )}
            </div>
        </div>
    )
}

export default OrdersPage;
