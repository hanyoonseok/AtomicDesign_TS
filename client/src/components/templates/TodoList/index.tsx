import React, { useState, useCallback } from 'react';
import * as S from './style';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';

import { TodoItem, Background, AddForm } from '../../../components';
import useTodo from '../../../hooks/useTodo'

interface Props {
  Today: {
    date: string;
    week: string;
  };
  ControlInput(): void;
}

const TodoList = ({ Today, ControlInput }: Props): React.ReactElement => {
  const { todolist, inputOpen } = useSelector((state: RootState) => state.todo);
  const [add, setAdd] = useState('');

  const onChange = (e: any) => {
    setAdd(e.target.value);
  };

  return (
    <Background bgColor={'lightgray'}>
      <S.TodoWrapper>
        <S.FlowWrapper>
          <S.StyledLabel ftWeight={'bold'} ftSize={'2rem'}>
            {Today.date}
          </S.StyledLabel>
          <S.StyledLabel color={'green'} ftWeight={'bold'}>
            {Today.week}
          </S.StyledLabel>
          <S.StyledLabel ftWeight={'bold'} children={todolist.todoNum + '개'} />
        </S.FlowWrapper>
        <S.FlowWrapper>
          {todolist.todos.map((item, i) => {
            return <TodoItem item={item} key={i} />;
          })}
        </S.FlowWrapper>
        {inputOpen && <AddForm add={add} onChange={onChange} />}
        <S.PlusBtn onClick={ControlInput} inputOpen={inputOpen}>
          +
        </S.PlusBtn>
      </S.TodoWrapper>
    </Background>
  );
};

export default TodoList;
