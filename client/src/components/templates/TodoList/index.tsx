import React from "react";
import * as S from "./style"
import {TodoItem, Background} from "../../../components"

const TodoList = ({
}) => {
  return (
    <Background bgColor={"lightgray"}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={"bold"}>2019년 9월 25일</S.StyledLabel>
          <S.StyledLabel>화요일</S.StyledLabel>
          <S.StyledLabel>할일 2개 남음</S.StyledLabel>
        </S.FlowWrapper>
        <S.FlowWrapper>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </S.FlowWrapper>
      </S.TodoWrapper>
      <S.PlusBtn>+</S.PlusBtn>
    </Background>
    
  );
};

export default TodoList;
