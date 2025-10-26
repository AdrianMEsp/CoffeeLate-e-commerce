
export interface IProduct {
  id: number
  name: string
  price: number
  image: string
  description: string
  stock:number
  categoryId: number
}

export interface ICategory{
  id:number
  name: string
}

export interface ICardProp{
  id:number
  title: string
  img: string
  text: string
}

export interface ILoginProps{
  email:string
  password:string
}

export interface ILoginPropsErrors{
  email?:string
  password?:string
}