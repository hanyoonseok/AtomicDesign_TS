import React,{useState} from "react";
import * as S from "./style"
import {TodoItem, Background} from "../../../components"

interface Props{
  todo:string[],
  setTodo:React.Dispatch<React.SetStateAction<string[]>>
}

const TodoList = ({
  todo,
  setTodo
}:Props):React.ReactElement => {
  return (
    <Background bgColor={"lightgray"}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={"bold"}>2019년 9월 25일</S.StyledLabel>
          <S.StyledLabel>화요일</S.StyledLabel>
          <S.StyledLabel>할일 2개 남음</S.StyledLabel>
        </S.FlowWrapper>
        <S.FlowWrapper>
          {
            todo.map((item)=>{
              return(
                <TodoItem text={item}/>
              )
            })
          }
        </S.FlowWrapper>
      </S.TodoWrapper>
      <S.PlusBtn setTodo={setTodo}>+</S.PlusBtn>
    </Background>
    
  );
};

export default TodoList;
