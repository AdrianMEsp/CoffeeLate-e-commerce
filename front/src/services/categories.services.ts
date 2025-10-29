import { ICategory } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getCategoriesDB() {
    try{
        const response = await fetch(`${APIURL}/products`, {
            next: {revalidate: 360}//360 segundos
        })
        const categories: ICategory[] = await response.json();
        return categories;
    }catch(error: any){
        throw new Error(error)
    }
} 

export async function getProductById(id: string) {
    try{
        const response = await getCategoriesDB()
        const categoryFound = await response.find((category) => category.id.toString() === id)
        if (!categoryFound) throw new Error("Product not found")

        return categoryFound
    } catch (error:any) {
        throw new Error(error)
    }
} 