const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function createOrder(token: string, idProducts: number[]) {
    console.log(token, idProducts);
    
    try{
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({products: idProducts }),
        })
        
        if(response.ok){
            alert("La compra fue realizada con exito")
            return response.json()
        }else {
            throw new Error("Error creando la orden");
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
                Authorization: token
            }
        })
        return response.json();
    }catch(error: any){
        throw new Error(error)
    }
}