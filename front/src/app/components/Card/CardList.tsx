import {ListProducts} from "../../helpers/ListProducts"
import Card from "./Card"

const CardList = () => {
    return (
        <div className="flex m-4 overflow-x-auto space-x-4 p-4">
            {
                ListProducts && ListProducts.map((product) => {
                    return <Card key={product.id} {...product}></Card>
                })
            }
        </div>
    )
}

export default CardList