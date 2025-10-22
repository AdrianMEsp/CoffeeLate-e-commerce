import productsToPreLoad from "@/utils/productsMockup"
import Card from "./Card"

const CardList = () => {
    return (
        <div>
            {
                productsToPreLoad && productsToPreLoad.map((product) => {
                    return <Card key={product.id} {...product}></Card>
                })
            }
        </div>
    )
}

export default CardList