import React from "react";
import * as S from "./style"
import {Button , Label} from "../../../components"
import {AiOutlineCheckCircle} from "react-icons/ai"

function TodoItem ():React.ReactElement {
  // default
  return (
      <S.ItemWrapper>
        <S.CheckBtn><AiOutlineCheckCircle/></S.CheckBtn>
        <Label children={"아침 산책"}/>
      </S.ItemWrapper>
  );
};

export default TodoItem;
