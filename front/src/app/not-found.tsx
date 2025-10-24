import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <p>SORRY THIS PAGE IS NOT FOUND</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}