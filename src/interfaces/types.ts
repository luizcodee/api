export interface IUser{
    email:string;
    password:string;
    nome:string;
    role:string;
    createAt:Date;
}

export interface IProduct{
    id:number;
    name:string;
    description:string;
    price:number;
    stock:number;
    createAt:Date;
    updateAt:Date;
}