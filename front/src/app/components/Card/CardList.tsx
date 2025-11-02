
import { IProduct } from "@/types";
import Card from "./Card"

interface CardListProps {
    listProducts: IProduct[];
}

const CardList = ({listProducts} : CardListProps) => {

    return (
        <div  className="md:grid md:grid-cols-3 md:gap-2" >
            {listProducts.map((product) => {
                return (
                    <Card key={product.id} {...product} />
                )
            })}
        </div>
    )

}

export default CardList