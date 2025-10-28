import {ListProducts} from "../../helpers/ListProducts"
import Image from "next/image";

interface ProductDetailProps {
    params: {
        productID: string;
    }

}


const ProductPage = async ({ params }: ProductDetailProps) => {

    const { productID } = await params;
    const product = ListProducts[1]

    return (

        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-7xl px-4 mx-auto 2xl:px-0 flex justify-center">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 flex items-center">
                <Image src={product.image} width={200} height={200}  alt={product.name} className=""/>
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        {/* Nombre del producto */}
                        <h1
                            className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                        >
                            {product.name}
                        </h1>

                        {/* Precio del producto */}
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p
                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                            >
                                {product.price}
                            </p>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <a
                                href="#"
                                title=""
                                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
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
                            </a>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        {/* Descripcion del producto */}
                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage;