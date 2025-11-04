"use client"
import { getProdutsDB } from "@/services/products.services"
import { IProduct } from "@/types"
import { useState, useEffect } from "react"
import CardList from "./components/Card/CardList"

export default function ProductsPage() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

    useEffect(() => {
        async function fetchProducts() {
            const data: IProduct[] = await getProdutsDB();
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const filtered = selectedCategoryId
        ? products.filter(p => p.categoryId === selectedCategoryId)
        : products

    const categories = [
        { id: 1, name: 'Whole Bean Coffee' },
        { id: 2, name: 'Ground Coffee' },
        { id: 3, name: 'Coffee Capsules' },
        { id: 4, name: 'Instant Soluble Coffee' },
        { id: 5, name: 'Specialty Gourmet Coffee' },
        { id: 6, name: 'Not coffee' }
    ];
    return (

        <div className="flex">

            {/* SIDEBAR */}
            <aside className="bg-neutral-900 text-white p-4 pt-8 w-min">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                
                <div className="space-y-2 flex flex-col items-start cursor-pointer">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategoryId(cat.id)}
                            className={`text-start border-b-2 cursor-pointer px-1
                            ${selectedCategoryId === cat.id
                                    ? "text-orangeTwo font-bold border-orangeTwo"
                                    : "hover:text-orangeTwo"
                                }`
                            }
                        >
                            {cat.name}
                        </button>
                    ))}

                    <button
                        onClick={() => setSelectedCategoryId(null)}
                        className={`px-1 border-b-2 cursor-pointer
                        ${selectedCategoryId === null
                                ? "text-orangeTwo font-bold border-orangeTwo"
                                : "text-orange-400 hover:text-orangeTwo"
                            }`
                        }
                    >
                        Show All
                    </button>
                </div>
            </aside>

            {/* PRODUCTS */}
            <CardList listProducts={filtered} />

        </div>
    )
}
