'use client'

import React from "react"
import { IProduct } from "../../../types"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Card: React.FC<IProduct> = ({id, name, image, price, description, stock, categoryId }) => {

  const { userData } = useAuth();
  const router = useRouter();
  const handleAddToCart = () => {
    
    if (!userData?.token) {
      alert("Inicia sesion para comprar")
      router.push("/auth/login");
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((item: IProduct) => {
        if (item.id === id) return true;
        return false
       })
      if (productExist){
        alert("Este producto ya existe en el carrito")
        router.push("/cart")
      }
      cart.push({
        name, id, description, stock, price, categoryId, image
      })
      localStorage.setItem("cart",JSON.stringify(cart))
      alert("El producto fue agregado al carrito")
    }
  }

  return (
    <div className="flex flex-col h-max items-center bg-neutral-800 text-whitePrimary m-4 p-4 justify-between rounded-2xl">
      <h3 className="text-center text-3xl mb-2">{name}</h3>
      <Image src={image} width={125} height={125} alt={name} className=" p-3" />
      <h1 className="text-center m-2 ">{description}</h1>
      <span className="text-orangeFour font-bold text-2xl">${price}</span>
      <button onClick={handleAddToCart} className="border-2 p-2 w-36 hover:bg-orangeThree rounded-2xl bg-orangeOne">ADD TO CART</button>
    </div>
  )
}

export default Card
