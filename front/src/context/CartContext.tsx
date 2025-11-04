'use client'

import { IProduct } from "@/types"
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

interface CartContextProps {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getIdItems: () => number[];
    getItemsCount: () => number;
}

const CartContex = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    getTotal: () => 0,
    getIdItems: () => [],
    getItemsCount: () => 0,
});

interface CartProvider {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProvider> = ({ children }) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const { userData } = useAuth();

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }, [cartItems])

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const data = localStorage.getItem("cart")
            if (data) {
                setCartItems(JSON.parse(data))
            }
        }
    }, [])

    const addToCart = (product: IProduct) => {
        if (!userData) {
            toast.warning(
                "Debes iniciar sesion para agregar al carrito"
            )
            return
        }
        const productExist = cartItems.some((item) =>
            item.id === product.id)
        if (productExist) {
            toast.warning("Solo una unidad del mismo producto por orden")
            return;
        } else {
            setCartItems((prevItems) => [...prevItems, product])
            toast.success("Producto agregado al carrito")
        }
    }

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            const updatedCart = prevItems.filter((item) => item.id !== productId)
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        })
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem("cart")
    }

    const getTotal = () => {
        if (cartItems)
            return cartItems.reduce((total, item) => total + item.price, 0)
        return 0;
    }

    const getIdItems = () => {
        return cartItems.map((item) => item.id)
    }

    const getItemsCount = () => {
        return cartItems.length
    }

    return (
        <CartContex.Provider value={{
            cartItems,
            addToCart, removeFromCart, clearCart,
            getTotal, getIdItems, getItemsCount
        }}>
            {children}
        </CartContex.Provider>
    )
}

export const useCart = () => useContext(CartContex)