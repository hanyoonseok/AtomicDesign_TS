import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../reducers/todo';
import * as S from './style';

import useTodo from '../../../hooks/useTodo';
interface Props {
  onChange(e: any): void;
  add: string;
  setAdd:React.Dispatch<React.SetStateAction<string>>
}
function AddForm({ onChange, add,setAdd }: Props): React.ReactElement {
  const { onAddTodo } = useTodo();
  const dispatch = useDispatch();

  const onClick = useCallback((add) => () => {
      dispatch(addTodo(add));
      setAdd('');
  },[dispatch]);
  // default
  return (
    <S.Wrapper>
      <S.StyledInput
        autoFocus
        placeholder="할 일을 추가하고 Enter를 누르세요"
        onChange={onChange}
        value={add}
      />
      <S.StyledBtn onClick={onClick(add)}>+</S.StyledBtn>
    </S.Wrapper>
  );
}

export default AddForm