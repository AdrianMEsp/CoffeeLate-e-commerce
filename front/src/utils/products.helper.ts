/* eslint-disable @typescript-eslint/no-explicit-any */
 import { IProduct } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProdutsDB() {
    try{
        const response = await fetch(`${APIURL}/products`, {
            next: {revalidate: 360}//360 segundos
        })
        const products: IProduct[] = await response.json();
        return products;
    }catch(error: any){
        throw new Error(error)
    }
} 

export async function getProductById(id: string) {
    try{
        const response = await getProdutsDB()
        const productFound = await response.find((product) => product.id.toString() === id)
        if (!productFound) throw new Error("Product not found")

        return productFound
    } catch (error:any) {
        throw new Error(error)
    }
} 