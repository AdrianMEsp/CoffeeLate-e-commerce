import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex justify-evenly text-3xl p-3">
                <Link className="hover:text-orangeThree hover:border-orangeThree hover:border-b-2 border-b-2 border-black" href="/dashboard/orders">Orders</Link>
                <Link className="hover:text-orangeThree hover:border-orangeThree hover:border-b-2 border-b-2 border-black" href="/dashboard">Profile</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}