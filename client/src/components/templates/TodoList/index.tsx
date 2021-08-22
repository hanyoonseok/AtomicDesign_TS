import React,{useState} from "react";
import * as S from "./style"
import {TodoItem, Background, AddForm} from "../../../components"

interface Props{
  todo:{
    id: number;
    text: string;
  }[],
  AddTodo():void,
  todonum:number|string,
  inputOpen:boolean,
  onChange(e:any):void,
  ControlInput():void,
  today:{
    date: string;
    week: string;
  },
  isCheck:boolean,
  setIsCheck:React.Dispatch<React.SetStateAction<boolean>>,
  checkBtn():void
}

const TodoList = ({
  todo,
  AddTodo,
  todonum,
  inputOpen,
  ControlInput,
  onChange,
  today,
  isCheck,
  setIsCheck,
  checkBtn,
}:Props):React.ReactElement => {
  return (
    <Background bgColor={"lightgray"}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={"bold"} ftSize={"2rem"}>{today.date}</S.StyledLabel>
          <S.StyledLabel color={"green"} ftWeight={"bold"}>{today.week}</S.StyledLabel>
          <S.StyledLabel  ftWeight={"bold"}children={todonum+'개'}/>
        </S.FlowWrapper>
        <S.FlowWrapper>
          {
            todo.map((item)=>{
              return(
                <TodoItem 
                text={item.text}
                isCheck={isCheck}
                setIsCheck={setIsCheck}
                checkBtn={checkBtn}/>
              )
            })
          }
        </S.FlowWrapper>
        {
        inputOpen && 
        <AddForm 
        AddTodo={AddTodo}
        onChange={onChange}/>
        }
        <S.PlusBtn 
        onClick={ControlInput}
        inputOpen={inputOpen}>
          +
        </S.PlusBtn>
      </S.TodoWrapper>
    </Background>
    
  );
};

export default TodoList;
