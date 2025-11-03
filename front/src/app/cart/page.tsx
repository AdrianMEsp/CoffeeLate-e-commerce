'use client'

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/utils/orders.helper";
import Image from "next/image";


const CartPage = () => {

    const { userData } = useAuth();
    const { cartItems, clearCart, getIdItems,
        getItemsCount, getTotal, removeFromCart } = useCart();

    const handleCheckout = async () => {
        if (!userData?.token) {
            alert("Error en la sesion");
            return
        }
        try {
            const response = await createOrder(userData.token, getIdItems())
            console.log(response);

            clearCart();
        } catch (error: any) {
            console.error(error);
            alert(`No se pudo completar la compra, ${console.log(error)}`);
        }
    }

    return (
        <div className="flex flex-col w-full mx-1">
            <h2 className="text-5xl font-semibold flex justify-center mb-6 text-white mt-5">Shopping Cart</h2>
            
            <div className="mx-2 mb-4">

                {/* Product */}
                <div className="sm:flex sm:flex-col sm:items-center">
                    <div className="flex flex-col justify-center items-center ">
                        {cartItems && cartItems.map((prod) =>
                        (
                            <div key={prod.id} className="border-2 rounded-2xl p-1 m-4 w-full sm:w-1/2">
                                <div className="flex justify-between sm:mr-2">
                                    <Image src={prod.image} width={125} height={125} alt={prod.name} className="p-1" />
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-center text-3xl mb-2">{prod.name}</h3>
                                        <h1 className="text-center m-2 ">{prod.description}</h1>
                                    </div>
                                    <span className="flex items-center text-orangeFour mr-1 font-bold text-2xl">${prod.price}</span>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => removeFromCart(prod.id)}
                                        className="flex text-sm font-medium cursor-pointer text-red-600 mr-2 mb-2 hover:underline dark:text-red-500">
                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>

                {/* Check */}
                <div className="sm:flex sm:justify-center">
                    <div className="space-y-4 rounded-lg border p-4 shadow-sm
                     border-gray-700 bg-gray-800
                    sm:flex sm:w-1/2 sm:flex-col sm:items-center "
                    >
                        <p className="text-xl font-semibold text-white">Order summary</p>
                        <p className="text-gray-400">Items ({getItemsCount()})</p>
                        <div className="space-y-4">

                            <div className="space-y-2">
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-400">Original price</dt>
                                    <dd className="text-base font-medium text-white">${getTotal()}</dd>
                                </dl>
                            </div>

                            <dl className="flex items-center justify-between gap-4 border-t border-gray-700">
                                <dt className="text-base font-bold text-white">Total</dt>
                                <dd className="text-base font-bold text-white">${getTotal()}</dd>
                            </dl>
                        </div>

                        <button onClick={handleCheckout} className="flex w-full items-center justify-center 
                        cursor-pointer hover:text-orangeOne text-sm font-medium text-white 
                        "
                            disabled={!userData} >
                            Proceed to Checkout
                        </button>

                        <button onClick={clearCart} className="flex w-full items-center justify-center
                         cursor-pointer text-sm font-medium hover:text-error text-red-950">
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default CartPage;