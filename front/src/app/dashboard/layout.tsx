import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex justify-evenly text-3xl">
                <Link href="/dashboard/orders">Orders</Link>
                <Link href="/dashboard">Profile</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}