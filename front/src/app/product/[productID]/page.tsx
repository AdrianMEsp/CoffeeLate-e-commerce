interface ProductDetailProps {
    params: {
        productID: string;
    }

}


const ProductPage = async ({ params }: ProductDetailProps) => {

    const { productID } = await params;
    return (
        <div>Product Page del producto con ID: {productID}</div>
    )
}

export default ProductPage;