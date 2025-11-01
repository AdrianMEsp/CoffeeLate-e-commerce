import { ICategory } from "@/types";

const Category: React.FC<ICategory> = ({name}) => {

    return (
        <div className="mt-4 justify-center">
            <p>{name}</p>
        </div>
    )
}

export default Category;