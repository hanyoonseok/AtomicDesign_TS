import React,{memo} from "react";
import * as S from "./style"
import { Label} from "../../../components"
import {MdDone, MdDelete } from "react-icons/md"

interface Props{
  checkBtn(id:number):void,
  deleteBtn(id:number):void,
  item:{
    id: number;
    text: string;
    done:boolean;
  }
}
function TodoItem ({
  checkBtn,
  deleteBtn,
  item,
}:Props):React.ReactElement {
  // default
  return (
      <S.ItemWrapper >
        <S.CheckBtn onClick={() => checkBtn(item.id)}>
          {
            item.done ? <MdDone/>
            : 'ㅇ'
          }
        </S.CheckBtn>
        {
          item.done?<S.StyledLabel ftSize={"1.5rem"} color={"lightgray"} children={item.text}/>
          :<S.StyledLabel ftSize={"1.5rem"} children={item.text}/>
        }
        <S.Remove>
          <MdDelete onClick={() => deleteBtn(item.id)}/>
        </S.Remove>
      </S.ItemWrapper>
  );
};

export default React.memo(TodoItem);
