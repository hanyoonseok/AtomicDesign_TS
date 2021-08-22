import React,{useState} from "react";
import * as S from "./style"
import {TodoItem, Background, AddForm} from "../../../components"

interface Props{
  todo:{
    id: number;
    text: string;
    done:boolean;
  }[],
  checkBtn(id: number):void,
  deleteBtn(id: number):void,
  AddTodo():void,
  inputOpen:boolean,
  onChange(e:any):void,
  ControlInput():void,
  Today:{
    date: string;
    week: string;
  },
}

const TodoList = ({
  todo,
  checkBtn,
  deleteBtn,
  AddTodo,
  inputOpen,
  ControlInput,
  onChange,
  Today,
}:Props):React.ReactElement => {
  return (
    <Background bgColor={"lightgray"}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={"bold"} ftSize={"2rem"}>{Today.date}</S.StyledLabel>
          <S.StyledLabel color={"green"} ftWeight={"bold"}>{Today.week}</S.StyledLabel>
          <S.StyledLabel  ftWeight={"bold"}children={todo.length+'개'}/>
        </S.FlowWrapper>
        <S.FlowWrapper>
          {
            todo.map((item)=>{
              return(
                <TodoItem 
                checkBtn={checkBtn}
                deleteBtn={deleteBtn}
                item={item}/>
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
