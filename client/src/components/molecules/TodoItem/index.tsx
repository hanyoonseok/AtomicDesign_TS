import React,{useState, useCallback} from 'react';
import * as S from './style';
import { MdDone, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { FiEdit } from 'react-icons/fi';

import { ITodo } from '../../../types/todo';
import useTodo from '../../../hooks/useTodo';
import useInput from '../../../hooks/useInput';
import {editTodo} from '../../../modules/todo'

interface Props {
  item: ITodo;
}
function TodoItem({ item }: Props): React.ReactElement {
  const { onDeleteTodo, onCheckTodo, onEditTodo } = useTodo();
  const [text, onChangeText, setText] = useInput('');
  const [inputOpen, setInputOpen] = useState(false);
  const id = item.id;
  const dispatch = useDispatch();

  const openEdit = useCallback(()=>{
    setInputOpen((prev)=>!prev);
    setText('');
  },[inputOpen])
  const onEdit = useCallback(()=>{
    dispatch(editTodo({id, text}))
    setInputOpen(false);
  },[id, text])
  // default
  return (
    <S.ItemWrapper>
      <S.CheckBtn onClick={onCheckTodo(id)}>{item.isDone ? <MdDone /> : 'ㅇ'}</S.CheckBtn>
      {inputOpen ? <><S.StyledInput onChange={onChangeText}/><button onClick={onEdit}>수정</button></>
      :
      item.isDone ? (
        <S.StyledLabel ftSize={'1.5rem'} color={'lightgray'} children={item.text} />
      ) : (
        <S.StyledLabel ftSize={'1.5rem'} children={item.text} />
      )}
      <S.SmallBtns>
        <S.Remove onClick={onDeleteTodo(id)}>
          <MdDelete />
        </S.Remove>
        <S.Edit onClick={openEdit}>
          <FiEdit />
        </S.Edit>
      </S.SmallBtns>
    </S.ItemWrapper>
  );
}

export default React.memo(TodoItem);
