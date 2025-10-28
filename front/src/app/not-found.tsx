import Link from "next/link";
import SubmitButton from "./components/SubmitButton/SubmitButton";


export default function NotFound() {
    return (
        <div className="notFound-bg">
            <div className="my-5 text-4xl flex flex-col items-center ">
                <p className="text-9xl my-4">404</p>
                <p className="my-4 text-center">SORRY THIS PAGE IS NOT FOUND</p>
                <Link href="/" className="my-4">
                    <SubmitButton text="Home"/>
                </Link>
            </div>
        </div>
    )
}