import { ILoginProps, IRegister } from "@/types"
import { toast } from "sonner"

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
            toast.success("User Registered")
            return response.json()
        }else {
            toast.error("User registration failed")
            throw new Error("The server failed to register the user")
        }
    }catch(error: any){
        throw new Error(error)
    }
} 

export async function login(userData: ILoginProps) {
    try{
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok){
            toast.success("User logged in")
            return response.json()
        }else {
            
            toast.error("User login failed")
            throw new Error("The server failed while logging in the user.")
        }
    }catch(error: any){
        throw new Error(error)
    }
}