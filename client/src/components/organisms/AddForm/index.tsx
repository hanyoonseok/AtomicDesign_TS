import React, { memo } from 'react';
import * as S from './style';

import { addTodo, deleteTodo, checkTodo } from '../../../reducers/todo';
import useTodo from '../../../hooks/useTodo'
interface Props {
  onChange(e: any): void;
  add:string;
}
function AddForm({ onChange,add }: Props): React.ReactElement {
    const {onAddTodo} = useTodo();
  // default
  return (
    <S.FormWrapper onSubmit={onAddTodo(add)}>
      <S.StyledInput
        autoFocus
        placeholder="할 일을 추가하고 Enter를 누르세요"
        onChange={onChange}
      />
    </S.FormWrapper>
  );
}

export default React.memo(AddForm);
