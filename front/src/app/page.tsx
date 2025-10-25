import React from "react"
import CardList from "./components/Card/CardList"
import Image from "next/image"
import coffee from "./../assets/coffeBackground-Vertical-removebg-preview.png"
import CardProp from "./components/CardProp/CardProp"
import CafeBg from "./../assets/coffeeField.jpg"
import Link from "next/link"
import { ListProperties } from "./helpers/ListProperties"

export default function Home() {

    return (
        <main>
            <div className="flex justify-between bg-gray-300 border-2 rounded border-black">
                <div>
                    <Image src={coffee} alt="" />
                </div>
                <div className="text-black font-bold text-shadow-gray-600 
                text-8xl mr-10 flex flex-col justify-center items-center">
                    <p>Good Coffee <br />
                        will always be </p>
                    <div className="text-shadow-lg">
                        <span className="text-yellow-300">Col</span>
                        <span className="text-blue-900">omb</span>
                        <span className="text-red-700">ian</span>
                    </div>
                </div>
            </div>

            {/* Properties */}
            <div>
                <div>
                    <div className="flex justify-evenly h-70">
                        {ListProperties.map((propertie) => {
                            return <CardProp key={propertie.id} {...propertie}></CardProp>
                        })}
                    </div>
                </div>
            </div>

            {/* Field */}
            <div className="flex p-6 bg-linear-to-b to-neutral-800">
                <div className="w-1/2">
                    <Image src={CafeBg} alt="holi" className="rounded-2xl" />
                </div>
                <div className="ml-6 w-1/2 flex justify-between flex-col items-center">
                    <p className="font-bold text-6xl ">Best coffee shop in Argentina</p>
                    <p className="">A passionate family cultivates their own coffee plants in the mountain highlands, nurturing each one with care. After harvest, they hand-select the finest beans, roast and pack them meticulously to preserve their aroma and freshness. The result is an authentic specialty coffee, crafted with love from the farm to your cup.</p>
                    <Link href={"/about"}
                        className="p-3 w-35 border rounded bg-linear-to-r from-amber-700 text-center">Read More!</Link>
                </div>
            </div>
        </main>
    )
}