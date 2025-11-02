'use client'

import { useCart } from "@/context/CartContext"
import { IProduct } from "@/types";

interface ButtonProps {
    product: IProduct
}

const AddCartButton = ({ product }: ButtonProps) => {
    const { addToCart } = useCart();

    return (
        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <button
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium
                                 text-blackPrimary  bg-white rounded-lg border border-blackPrimary
                                  hover:bg-orangeThree hover:text-primary-700 
                                      "
                onClick={()=> addToCart(product)}
            >
                <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                </svg>
                Add to Cart
            </button>
        </div>
    )
}

export default AddCartButton;