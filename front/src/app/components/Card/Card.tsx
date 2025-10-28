import React from "react"
import { IProduct } from "../../../types"
import Image from "next/image"

const Card: React.FC<IProduct> = ({ name, image, price, description }) => {
  return (
    <div className="flex flex-col items-center bg-neutral-800 text-whitePrimary mr-4 p-4 justify-between rounded-2xl">
      <h3 className="text-center ">{name}</h3>
      <Image src={image} width={125} height={125} alt={name} className="bg-orangeOne p-3" />
      <h1 className="text-center text-sm">{description}</h1>
      <span className="text-orangeFour font-bold text-2xl">${price}</span>
      <button className="border-2 p-2 w-36 hover:bg-orangeThree rounded-2xl bg-orangeOne">ADD TO CART</button>
    </div>
  )
}

export default Card
