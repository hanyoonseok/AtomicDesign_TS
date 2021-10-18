import { IPost } from "./post";
export interface IUser{
    email?:string,
    password?:string,
    nickname?:string,
    Posts?:any[],
}