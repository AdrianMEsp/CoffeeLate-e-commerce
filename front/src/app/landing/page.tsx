import React from "react"
import Image from "next/image"
import coffee from "../../assets/coffeBackground-Vertical-removebg-preview.png"
import CardProp from "../components/CardProp/CardProp"
import CafeBg from "../../assets/coffeeField.jpg"
import Link from "next/link"
import { ListProperties } from "../helpers/ListProperties"
import Carousel from "../components/Carousel/Carousel"

const LandingPage = () => {

    return (
        <main>

            <Carousel />

            {/* Colombia */}
            <div className="flex justify-between bg-gray-300 border-2 rounded border-blackPrimary">
                <div className="hidden md:block">
                    <Image src={coffee} alt="" />
                </div>
                <div className="text-black font-bold text-shadow-gray-800 
                md:text-9xl mr-10 flex flex-col justify-center items-center
                text-7xl
                ">
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
                    <div className="flex flex-wrap justify-center
                    sm:flex-row sm:justify-between sm:me-3 sm:ms-3 no-scrollbar
                       
                    ">
                        {ListProperties.map((propertie) => {
                            return <CardProp key={propertie.id} {...propertie}></CardProp>
                        })}
                    </div>
                </div>
            </div>

            {/* Field */}
            <div className="flex flex-col p-6 bg-linear-to-b to-neutral-800
                            lg:flex-row ">
                <div className="">
                    <Image src={CafeBg} alt="holi" className="rounded-2xl" />
                </div>
                <div className="ml-2 w-full flex justify-between flex-col items-center
                                lg:ml-8 lg:w-1/2 ">
                    <p className="font-bold text-6xl mt-2 lg:mt-0

                    ">Best coffee shop in Argentina</p>
                    <p className="mt-2 lg:mt-0 ">A passionate family cultivates their own coffee plants in the mountain highlands, nurturing each one with care. After harvest, they hand-select the finest beans, roast and pack them meticulously to preserve their aroma and freshness. The result is an authentic specialty coffee, crafted with love from the farm to your cup.</p>
                    <Link href={"/about"}
                        className="p-3 w-35 border rounded bg-linear-to-r from-orangeThree text-center mt-2 lg:mt-0">Read More!</Link>
                </div>
            </div>

        </main>
    )
}

export default LandingPage
