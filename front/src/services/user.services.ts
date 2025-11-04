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
            toast.success("Usuario registrado")
            return response.json()
        }else {
            toast.error("Fallo al registrar el usuario")
            throw new Error("Fallo el servidor al registrar el usuario")
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
            toast.success("Usuario Logeado")
            return response.json()
        }else {
            toast.error("Fallo al logear el usuario")
            throw new Error("Fallo el servidor al logear el usuario")
        }
    }catch(error: any){
        throw new Error(error)
    }
}