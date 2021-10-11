import React,{memo} from "react";
import * as S from "./style"
import { Label} from "../../../components"
import {MdDone, MdDelete } from "react-icons/md"

import {ITodo} from '../../../types/todo'
import useTodo from '../../../hooks/useTodo'

interface Props{
  item:ITodo
}
function TodoItem ({
  item,
}:Props):React.ReactElement {
  const {onDeleteTodo, onCheckTodo}  = useTodo();
  const id = item.id;
  // default
  return (
      <S.ItemWrapper >
        <S.CheckBtn onClick={onCheckTodo(id)}>
          {
            item.isDone ? <MdDone/>
            : 'ㅇ'
          }
        </S.CheckBtn>
        {
          item.isDone?<S.StyledLabel ftSize={"1.5rem"} color={"lightgray"} children={item.text}/>
          :<S.StyledLabel ftSize={"1.5rem"} children={item.text}/>
        }
        <S.Remove onClick={onDeleteTodo(id)}>
          <MdDelete/>
        </S.Remove>
      </S.ItemWrapper>
  );
};

export default React.memo(TodoItem);
