'use client'

import { NavItems } from "@/app/helpers/NavItems";
import Link from "next/link";
import logo from "../../../assets/granoCafeLogo.png"
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const { userData, logout } = useAuth();
  const { getItemsCount } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para hamburguesa

  const isLogin = pathname === "/auth/login"
  const isRegister = pathname === "/auth/register"
  const itemsCount = getItemsCount();

  return (
    <nav className="bg-gray-300 font-bold text-blackPrimary">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        {!(isLogin || isRegister) ? (
          <Link href="/landing" className="flex items-center rtl:space-x-reverse">
            <Image src={logo} width={50} alt="CoffeeLate Logo" />
            <span className="text-orangeOne ml-1">Coffee</span>
            <span className="text-blackPrimary">Late</span>
          </Link>
        ) : (
          <div className="flex items-center rtl:space-x-reverse">
            <Image src={logo} width={50} alt="CoffeeLate Logo" />
            <span className="text-orangeOne ml-1">Coffee</span>
            <span className="text-blackPrimary">Late</span>
          </div>
        )}

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // logica para desplegar hamburguesa
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-yellow focus:outline-none focus:ring-2
           focus:ring-lightOrange "
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Links */}
        {userData && (
          <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul
              className="font-medium flex flex-col border border-blackPrimary bg-whitePrimary
              md:p-3 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:items-center md:rounded-full"
            >
              {NavItems.map((route) => {
                const isActive = pathname === route.route;

                return (
                  <li key={route.id}>
                    <Link
                      href={route.route}
                      onClick={() => setIsMenuOpen(false)} // Cierra hamburguesa al navegar
                      className={`block py-2 px-3 text-blackPrimary font-bold relative 
                      md:hover:rounded-3xl hover:bg-orangeTwo
                      ${isActive ? "md:border-b-4 md:border-orangeTwo" : ""}
                      `}
                    >
                      {route.nameToRender}

                        {/* Numero notificaciones */}
                      {route.route === "/cart" && itemsCount > 0 && (
                        <span
                          className="absolute md:-top-1 md:-right-1 bg-orangeTwo text-white text-xs font-bold 
                          w-5 h-5 flex items-center justify-center rounded-full
                          top-1 left-12"
                        >
                          {itemsCount}
                        </span>
                      )}
                    </Link>
                  </li>)
              })}

              <button onClick={logout} 
              className="hover:bg-error py-2 md:hover:rounded-3xl px-3 text-blackPrimary font-bold 
              flex justify-end cursor-pointer">
                Logout
              </button>
            </ul>
          </div>
        )}

        {!userData && (
          <div className="ml-auto">
            {isLogin && <Link className="hover:text-orangeTwo" href="/auth/register">Register</Link>}
            {isRegister && <Link className="hover:text-orangeTwo" href="/auth/login">Login</Link>}
          </div>
        )}

        {userData && <p>Hello, {userData.user.name.split(" ")[0]}</p>}
      </div>
    </nav>
  );
};

export default NavBar;
