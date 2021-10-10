import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { addTodo, deleteTodo, checkTodo, controlInput } from '../reducers/todo';
import { useCallback } from 'react';

export default function useScore() {
  const { todolist, inputOpen } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onAddTodo = useCallback((text) => () => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  const onDeleteTodo = useCallback((deleteId) => () => dispatch(deleteTodo(deleteId)), [dispatch]);
  const onControlInput = useCallback(() => {
        dispatch(controlInput());
  },[dispatch]);

  return { todolist, onAddTodo, onDeleteTodo, onControlInput };
}
