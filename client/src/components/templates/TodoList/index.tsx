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
  modalOpen:boolean,
  onChange(e:any):void,
  OpenModal():void
}

const TodoList = ({
  todo,
  AddTodo,
  todonum,
  modalOpen,
  OpenModal,
  onChange,
}:Props):React.ReactElement => {
  return (
    <Background bgColor={"lightgray"}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={"bold"}>2019년 9월 25일</S.StyledLabel>
          <S.StyledLabel>화요일</S.StyledLabel>
          <S.StyledLabel children={todonum+'개'}/>
        </S.FlowWrapper>
        <S.FlowWrapper>
          {
            todo.map((item)=>{
              return(
                <TodoItem text={item.text}/>
              )
            })
          }
        </S.FlowWrapper>
      </S.TodoWrapper>
      <S.PlusBtn 
      onClick={OpenModal}>
        +
      </S.PlusBtn>
      {
        modalOpen && 
        <AddForm 
        AddTodo={AddTodo}
        onChange={onChange}/>
      }
    </Background>
    
  );
};

export default TodoList;
