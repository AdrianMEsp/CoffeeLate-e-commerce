import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: 'Whole Bean Coffee' },
    { name: 'Ground Coffee' },
    { name: 'Coffee Capsules' },
    { name: 'Instant/Soluble Coffee' },
    { name: 'Specialty/Gourmet Coffee' },
    { name: 'Not coffee'}
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}