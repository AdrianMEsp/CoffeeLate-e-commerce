import Link from "next/link";
import imgNotFound from "../assets/404NotFound.png"
import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <p>SORRY THIS PAGE IS NOT FOUND</p>
            <Image src={imgNotFound} alt="imagen"></Image>
            <Link href="/">Return Home</Link>
        </div>
    )
}