import React from "react";
import * as S from "./style"
import {Button , Label} from "../../../components"
import {AiOutlineCheckCircle} from "react-icons/ai"

interface Props{
  text?:string
}
function TodoItem ({
  text
}:Props):React.ReactElement {
  // default
  return (
      <S.ItemWrapper>
        <S.CheckBtn><AiOutlineCheckCircle/></S.CheckBtn>
        <Label children={text}/>
      </S.ItemWrapper>
  );
};

export default TodoItem;
