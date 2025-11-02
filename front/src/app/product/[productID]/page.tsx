import AddCartButton from "@/app/components/AddCartButton/AddCartButton";
import { getProductById } from "@/services/products.services";
import { IProduct } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailProps {
    params: {
        productID: string;
    }
}

const ProductPage = async ({ params }: ProductDetailProps) => {

    const { productID } = await params;

    let product: IProduct
    try {
        product = await getProductById(productID)
    } catch (error) {
        notFound()
    }

    return (
        <section className="py-8 bg-orangeFour md:py-16  antialiased">
            <div className="max-w-7xl px-4 mx-auto 2xl:px-0 flex justify-center">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 flex items-center">
                    <Image src={product.image} width={200} height={200} alt={product.name} className="" />
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
                                ${product.price}
                            </p>
                        </div>

                        {/* Add to cart */}
                        <AddCartButton product={product}/>


                        <hr className="my-6 md:my-8 border-gray-200 " />

                        {/* Descripcion del producto */}
                        <p className="mb-6 text-blackPrimary">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage;