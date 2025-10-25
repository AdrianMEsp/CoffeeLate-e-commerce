import { ICardProp } from "@/types"
import Image from "next/image"


const CardProp: React.FC<ICardProp> = ({ title, img, text }) => {
    return (
        <div>
            <div className="flex flex-col justify-between items-center  w-52 mt-4 h-60">
                <Image width={100} height={100} src={img} alt={title}
                style={{ objectFit: "contain", width: "100px", height: "100px" }} 
                className=" p-2 rounded-2xl bg-orange-800" /> {/*bg-gray-900*/}
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}

export default CardProp