import { usePathname } from "next/navigation"

const ShowComponent = ({children}) => {
    const pathname = usePathname();

    if (pathname === "/" || pathname === "/dashboard" ){
        return (
            <div> {children} </div>
        )
    }
    return (
        <div>{children}</div>
    )
}

export default ShowComponent