export interface ITodo{
    isDone?:boolean,
    text?:string,
    id?:number
}
export interface ITodoList{
    todos:ITodo[];
    todoNum:number;
}