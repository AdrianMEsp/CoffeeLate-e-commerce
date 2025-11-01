"use client"
import { getProdutsDB } from "@/services/products.services"
import { IProduct } from "@/types"
import { useState, useEffect } from "react"
import CardList from "./components/Card/CardList"
import Link from "next/link"
import Card from "./components/Card/Card"
import { ListProducts } from "./helpers/ListProducts"

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
        { id: 4, name: 'Instant/Soluble Coffee' },
        { id: 5, name: 'Specialty/Gourmet Coffee' },
        { id: 6, name: 'Not coffee' }
    ];

    const handleCategoryClick = (categoryName: string) => {
        const category = categories.find(c => c.name === categoryName)
        setSelectedCategoryId(category ? category.id : null)
    }

    return (
        <div className="flex">
            {/* SIDEBAR */}
            <aside className="bg-neutral-900 text-white p-4 pt-8 w-1/3 
            md:w-1/5">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                    {categories.map(cat => (
                        <li
                            key={cat.id}>
                            <button
                                onClick={() => handleCategoryClick(cat.name)}
                                className="hover:text-orangeTwo block"
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                    <li
                        className="cursor-pointer text-orange-400"
                        onClick={() => setSelectedCategoryId(null)}
                    >
                        Show All
                    </li>
                </ul>
            </aside>

            {/* PRODUCTS */}
            <CardList listProducts={filtered}/>

        </div>
    )
}
