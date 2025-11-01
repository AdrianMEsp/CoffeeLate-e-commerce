'use client'

import { IProduct } from "@/types"
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

export interface CartContextProps{
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getTotal: () => void;
    getIdItems: () => void;
    getItemsCount: () => number;
 }

 const CartContex = createContext<CartContextProps>({
    cartItems: [] ,
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getTotal: () => 0,
    getIdItems: () => [],
    getItemsCount: () => 0,
 });

 interface CartProvider {
    children: React.ReactNode;
 }

 export const CartProvider: React.FC<CartProvider>= ({children}) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const {userData} = useAuth();

    useEffect(() => {
        if (cartItems && cartItems.length > 0){
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }, [cartItems])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart")!)
        setCartItems(data)
    }, [])

    const addToCart = (product: IProduct) => {
        if (!userData){
            alert(
                "Debes iniciar sesion para agregar al carrito"
            )
        }
        const productExist = cartItems.some((item) =>
        item.id === product.id)
        if (productExist){
            alert("Solo una unidad por orden")
            return;
        }
        setCartItems((prevItems)=> [...prevItems, product])
    }

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id != productId) )
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem("cart")
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0)
    }

    const getIdItems = () => {
        return cartItems.map((item) => item.id)
    }

    const getItemsCount = () => {
        return cartItems.length
    }

    return (
            <CartContex.Provider value={{cartItems,addToCart, removeFromCart, clearCart, getTotal, getIdItems, getItemsCount }}>
                {children}
            </CartContex.Provider>
        )
 }

 export const useCart = () => useContext(CartContex)