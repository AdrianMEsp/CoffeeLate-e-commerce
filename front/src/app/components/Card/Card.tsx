/* 'use client' */

import React from "react"
import { IProduct } from "../../../types"
import Image from "next/image"
import Link from "next/link";
import AddCartButton from "../AddCartButton/AddCartButton";

const Card: React.FC<IProduct> = ({ name, id, image, price, description, stock, categoryId }) => {

  const product = { id, name,  description,  price, image, stock, categoryId }

  return (
    <div className="flex flex-col items-center bg-neutral-800 text-whitePrimary m-4 p-4 justify-between rounded-2xl">
      <Link className="flex flex-col items-center justify-between h-full" href={`/product/${id}`}>
        <h3 className="text-center text-3xl mb-2">{name}</h3>
        <Image src={image} width={125} height={125} alt={name} className=" p-3" />
        <h1 className="text-center m-2 ">{description}</h1>
        <span className="text-orangeThree text-center font-bold text-2xl">${price}</span>
      </Link>
      <AddCartButton product={product}/>
    </div>
  )
}

export default Card
