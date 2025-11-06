import { toast } from "sonner"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const createOrder= async (token: string, idProducts: number[]) => {
     try{
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({products: idProducts}),
        })
        
        if(response.ok){
            toast.success("The purchase was successful.")
            return response.json()
        }else {
            throw new Error("Error creating the order");
        }
    }catch(error: any){
        throw new Error(error)
    }
}

export async function getOrders(token: string) {
    try{
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                cache: "no-cache",
                Authorization: token
            }
        })
        return response.json();
    }catch(error: any){
        throw new Error(error)
    }
}