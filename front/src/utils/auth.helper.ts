import { IProduct, IRegister } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegister) {
    try{
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok){
            alert("Usuario registrado")
        }
        
    }catch(error: any){
        throw new Error(error)
    }
} 
