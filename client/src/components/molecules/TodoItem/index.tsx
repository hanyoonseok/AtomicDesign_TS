import React,{memo} from "react";
import * as S from "./style"
import { Label} from "../../../components"
import {MdDone, MdDelete } from "react-icons/md"
import {ITodo} from '../../../types/todo'

interface Props{
  item:ITodo
}
function TodoItem ({
  item,
}:Props):React.ReactElement {
  // default
  return (
      <S.ItemWrapper >
        <S.CheckBtn>
          {
            item.isDone ? <MdDone/>
            : 'ㅇ'
          }
        </S.CheckBtn>
        {
          item.isDone?<S.StyledLabel ftSize={"1.5rem"} color={"lightgray"} children={item.text}/>
          :<S.StyledLabel ftSize={"1.5rem"} children={item.text}/>
        }
        <S.Remove>
          <MdDelete/>
        </S.Remove>
      </S.ItemWrapper>
  );
};

export default React.memo(TodoItem);
