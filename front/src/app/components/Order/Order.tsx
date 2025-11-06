import { IOrder } from "@/types";
import Image from "next/image";
import { useState } from "react";

const Order: React.FC<IOrder> = ({ id, status, date, products }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb-5 bg-orangeFour rounded-2xl text-2xl border border-white">
            <div
                className="flex justify-between items-center font-bold text-3xl p-4 cursor-pointer select-none"
                onClick={() => setExpanded((prev) => !prev)}
            >
                <p className=" flex justify-center font-bold text-3xl p-4">Order N°{id}</p>

                <p className="p-2 font-normal">Date: {new Date(date).toLocaleDateString()}</p>

                <p className="p-2 font-normal">Status: {status}</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            <hr className=" border-blackPrimary border-2" />


            {expanded && (
                <>
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div className="flex justify-evenly items-center" >
                                        <Image src={product.image} alt={product.name} width={120} height={120}></Image>
                                        <p className="p-2">{product.name}</p>
                                    </div>
                                    <hr className=" border-blackPrimary" />
                                </div>
                            )
                        })
                    }
                </>)}


            <div className=" flex pr-10 py-2 justify-end">

                <p>Total ${products.reduce((total, item) => total + item.price, 0)}</p>
            </div>

        </div>
    )
}

export default Order;