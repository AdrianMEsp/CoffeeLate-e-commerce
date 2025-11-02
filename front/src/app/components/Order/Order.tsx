import { IOrder } from "@/types";
import Image from "next/image";

const Order: React.FC<IOrder> = ({ id, status, date, products }) => {

    return (
        <div className="mb-5 bg-orangeFour rounded-2xl text-2xl border border-white">
            <p className=" flex justify-center font-bold text-3xl p-4">Orden N°{id}</p>
            <hr className=" border-blackPrimary" />

            <div className="flex text-2xl justify-evenly p-2">
                <p className="p-2">Date: {new Date(date).toLocaleDateString()}</p>
                <p className="p-2">Status: {status}</p>
            </div>
            <hr className=" border-blackPrimary" />

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
            <div className=" flex pr-10 py-2 justify-end">

                <p>Total ${products.reduce((total, item) => total + item.price, 0)}</p>
            </div>

        </div>
    )
}

export default Order;