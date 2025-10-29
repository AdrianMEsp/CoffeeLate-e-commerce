/* import {ListProducts} from "../../helpers/ListProducts" */
import { getProdutsDB } from "@/services/products.services"
import Card from "./Card"
import Link from "next/link";

const CardList = async () => {

    const ListProducts = await getProdutsDB();

    return (
        <div className="flex m-4 overflow-x-auto space-x-4 p-4">
            {
                ListProducts && ListProducts.map((product) => {
                    return (
                    <Link key={product.id} href={`/product/${product.id}`} >
                        <Card key={product.id} {...product}></Card>
                    </Link>
                )
                })
            }
        </div>
    )
}

export default CardList