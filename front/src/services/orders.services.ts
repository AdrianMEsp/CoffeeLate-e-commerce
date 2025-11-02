

const APIURL = process.env.NEXT_PUBLIC_API_URL

/* usado por ivan ,vamos usar context  */

export const createOrder= async (idProduct: number[], token: string) => {
    try{
        const response = await fetch(`${APIURL}/orders`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: JSON.stringify(token),
            },
            body: JSON.stringify({products: idProduct})
        })
        
    }catch(error: any){
        throw new Error(error)
    }
}