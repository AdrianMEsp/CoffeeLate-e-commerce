import CartPage from "@/app/cart/page";
import { NavItems } from "@/app/helpers/NavItems";
import Link from "next/link";
import logo from "../../../assets/granoCafeLogo.png"
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="bg-gray-300 flex p-3 justify-between items-center font-bold text-black">
            <div className="ml-10">
                <section className="flex items-center">
                    <Image src={logo} width={50} alt="logoCafe" />
                    <span className="text-orange-600">Coffee</span>
                    <span className="text-black">Late</span>
                </section>
            </div>
            <div className="p-4 justify-evenly rounded-full bg-white">
                <section className=" ">
                    {NavItems.map((route) => {
                        return (
                            <Link key={route.id} href={route.route}
                                className=" p-5 hover:text-orange-600 "
                            >{route.nameToRender}</Link>
                        )
                    })}
                </section>
            </div>
            <div className=" hover:text-orange-600 mr-10">
                Cart
            </div>
        </div>
    )
}

export default NavBar;