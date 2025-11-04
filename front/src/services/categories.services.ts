import { ICategory, IProduct } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

const categoriesSeed: ICategory[] = [
  { id: 1, name: 'Whole Bean Coffee' },
  { id: 2, name: 'Ground Coffee' },
  { id: 3, name: 'Coffee Capsules' },
  { id: 4, name: 'Instant/Soluble Coffee' },
  { id: 5, name: 'Specialty/Gourmet Coffee' },
  { id: 6, name: 'Not coffee'}
]

 /* TODO: fijarse si sirve de algo */
export async function getCategoriesDB() {
  try {
    const response = await fetch(`${APIURL}/products`, {
      next: { revalidate: 360 }
    })

    const products: IProduct[] = await response.json()

    const uniqueCategoryIds = [...new Set(products.map(p => p.categoryId))]

    const categories = uniqueCategoryIds.map(id => {
      const category = categoriesSeed.find(c => c.id === id)
      return category ?? { id, name: `Unknown Category ${id}` }
    })

    return categories

  } catch (error: any) {
    throw new Error(error)
  }
}

 /* TODO: fijarse si sirve de algo */
/* export async function getProductByCategory(id: string) {
    try{
        const response = await getCategoriesDB()
        const productsFound = await response.find((product) => product.id.toString() === id)
        if (!productsFound) throw new Error("Product not found")

        return productsFound
    } catch (error:any) {
        throw new Error(error)
    }
} */  