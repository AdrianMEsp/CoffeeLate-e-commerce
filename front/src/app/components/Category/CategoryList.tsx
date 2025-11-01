import { getCategoriesDB } from "@/services/categories.services";
import Category from "./Category";

const CategoryList = async () => {

    const categoryList = await getCategoriesDB();

    return (
        <div>
            {
                categoryList && categoryList.map((category) => {
                    return (
                        <Category key={category.id} {...category} />
                    )
                })
            }

        </div>

    )
}
export default CategoryList;