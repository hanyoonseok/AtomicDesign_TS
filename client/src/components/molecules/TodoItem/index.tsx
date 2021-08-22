import React,{memo} from "react";
import * as S from "./style"
import {Button , Label} from "../../../components"
import {MdDone} from "react-icons/md"

interface Props{
  text?:string,
  isCheck:boolean,
  setIsCheck:React.Dispatch<React.SetStateAction<boolean>>,
  checkBtn():void,
}
function TodoItem ({
  text,
  isCheck,
  setIsCheck,
  checkBtn,
}:Props):React.ReactElement {
  // default
  return (
      <S.ItemWrapper>
        <S.CheckBtn onClick={checkBtn}>
          {
            isCheck ? <MdDone/>
            : 'ㅇ'
          }
        </S.CheckBtn>
        <Label ftSize={"1.5rem"} children={text}/>
      </S.ItemWrapper>
  );
};

export default React.memo(TodoItem);
