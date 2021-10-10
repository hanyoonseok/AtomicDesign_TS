import React, { useState, useRef, useCallback } from 'react';
import {  useDispatch } from 'react-redux';
import { TodoList } from '../../components';

import useTodo from '../../hooks/useTodo'

const TodoListPage = () => {
  const dispatch = useDispatch();
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const now = new Date();
  const {onControlInput} = useTodo();
  const Today = {
    date: now.getFullYear() + '년 ' + (now.getMonth() + 1) + '월 ' + now.getDate() + '일 ',
    week: week[now.getDay()],
  };

  const nextId = useRef(0);

  return (
    <TodoList
      Today={Today}
      ControlInput={onControlInput}
    />
  );
};

export default TodoListPage;
