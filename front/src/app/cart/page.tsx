'use client'

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/services/orders.services";
import Image from "next/image";
import { toast } from "sonner";
import ConfirmToast from "../components/ToastCustom/ConfirmToast";
const CartPage = () => {

    const { userData } = useAuth();
    const { cartItems, clearCart, getIdItems,
        getItemsCount, getTotal, removeFromCart } = useCart();

    const checkout = async () => {
        if (!userData?.token) {
            toast.error("Session error");
            return;
        }

        try {
            const response = await createOrder(userData.token, getIdItems());
            console.log(response);
            clearCart();
            toast.success("Purchase made");
        } catch (error: any) {
            console.error(error);
            toast.error("The purchase could not be completed");
        }
    };

    const handleCheckout = () => {
        ConfirmToast("Proceed with payment?", checkout);
    };

    const handleClearCart = () => {
        ConfirmToast("Do you want to empty your cart?", () => {
            clearCart();
            toast.success("Cart empty");
        });
    };

    const handleRemove = (id: number) => {
        ConfirmToast("Remove this product?", () => {
            removeFromCart(id);
            toast.success("Product removed");
        });
    };

    return (
        <div className="flex flex-col w-full mx-1">
            <h2 className="text-5xl font-semibold flex justify-center mb-6 text-white mt-5">Shopping Cart</h2>

            <div className="mx-2 mb-4">
                <div className="sm:flex sm:flex-col sm:items-center">
                    <div className="flex flex-col justify-center items-center sm:w-2/3">
                        {cartItems && cartItems.map((prod) => (
                            <div key={prod.id} className="border-2 bg-neutral-800 rounded-2xl p-1 m-4 w-full sm:w-1/2">

                                    <div className="flex justify-between  sm:mr-2">
                                        <Image src={prod.image} width={125} height={125} alt={prod.name} className="p-1" />
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-center text-3xl mb-2">{prod.name}</h3>
                                            <h1 className="text-center m-2">{prod.description}</h1>
                                        </div>
                                        <span className="flex items-center text-orangeThree mr-1 font-bold text-2xl">${prod.price}</span>
                                    </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={() => handleRemove(prod.id)}
                                        className="flex text-sm font-medium cursor-pointer text-red-600 mr-2 mb-2 hover:underline dark:text-red-500"
                                    >
                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sm:flex sm:justify-center">
                    <div className="space-y-4 rounded-lg border p-4 shadow-sm border-gray-700 bg-gray-800 
                    sm:flex sm:w-2/3 sm:flex-col">
                        <p className="text-3xl font-semibold text-white border-b-2">Order summary</p>
                        <p className="text-gray-400">Items ({getItemsCount()})</p>

                        <div className="space-y-4 font-bold">
                            <div className="space-y-2">
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-gray-400">Original price</dt>
                                    <dd className="text-white">${getTotal()}</dd>
                                </dl>
                            </div>

                            <dl className="flex text-2xl items-center justify-between gap-4 border-t border-gray-700">
                                <dt className="text-white">Total</dt>
                                <dd className="text-white">${getTotal()}</dd>
                            </dl>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="flex w-full items-center justify-center cursor-pointer
                             hover:text-orangeOne text-2xl text-white"
                            disabled={!userData}
                        >
                            Proceed to Checkout
                        </button>

                        <button
                            onClick={handleClearCart}
                            className="flex w-full items-center justify-center cursor-pointer 
                            text-sm font-medium
                             hover:bg-red-500 hover:border-red-800 hover:text-blackPrimary hover:font-bold
                              rounded-2xl p-1 text-error border-2 border-error"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
