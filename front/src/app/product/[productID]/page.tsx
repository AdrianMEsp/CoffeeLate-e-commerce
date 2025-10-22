const ProductPage = async ({params} : {params: {productID: string}}) => {
    const {productID} = await params;
    return (
        <div>Product Page del producto con ID: {productID}</div>
    )
}

export default ProductPage;