'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/granoCafeLogo.png";

export default function NavBar() {
  return (
    <nav className="bg-gray-300 font-bold text-black">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center rtl:space-x-reverse">
          <Image src={logo} width={50} alt="CoffeeLate Logo" />
          <span className="text-orange-500 ml-1">Coffee</span>
          <span className="text-black">Late</span>
        </Link>

        {/* Botón hamburguesa - solo visible en móvil */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-orange-200 focus:outline-none focus:ring-2
           focus:ring-orange-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Links de navegación */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="font-medium flex flex-col  border border-black bg-white
              md:p-3 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:items-center md:rounded-full" 
          >
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-black font-bold hover:text-orange-600"
              >
                Landing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-black font-bold hover:text-orange-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-black font-bold hover:text-orange-600"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-black font-bold hover:text-orange-600"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-black font-bold hover:text-orange-600"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

