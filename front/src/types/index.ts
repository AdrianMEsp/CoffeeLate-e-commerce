
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

export interface IRegister {
  email:string;
  password: string;
  name: string;
  address: string;
  phone:string
}

export interface IUser{
  id:number,
  name: string;
  email:string;
  address: string;
  phone:string
  role: string;
}

export interface IUserSession {
  token: string,
  user: IUser
}

export interface IOrder {
  id:number,
  status: string,
  date: Date,
  products: IProduct[]
}