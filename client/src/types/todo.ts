export interface ITodo{
    isDone?:boolean,
    text?:string,
    id?:string
}
export interface ITodoList{
    todos:ITodo[];
    todoNum:number;
}