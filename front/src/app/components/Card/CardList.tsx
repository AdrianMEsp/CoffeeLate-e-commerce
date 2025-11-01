/* import {ListProducts} from "../../helpers/ListProducts" */
import { IProduct } from "@/types";
import Card from "./Card"
import Link from "next/link";

interface CardListProps {
    listProducts: IProduct[];
}

const CardList = ({listProducts} : CardListProps) => {

    return (
        <div  className="md:grid md:grid-cols-3 md:gap-2" >
            {listProducts.map((product) => {
                return (
                    <Link className="" key={product.id} href={`/product/${product.id}`}>
                            <Card {...product} />
                    </Link>
                )
            })}
        </div>
    )

}

export default CardList