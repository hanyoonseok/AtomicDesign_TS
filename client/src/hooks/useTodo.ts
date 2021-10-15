import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addTodo, deleteTodo, checkTodo, editTodo, controlInput } from '../modules/todo';
import { useCallback } from 'react';

export default function useScore() {
  const { todolist, inputOpen, editDone } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onAddTodo = useCallback(
    (text) => () => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  const onDeleteTodo = useCallback((deleteId) => () => dispatch(deleteTodo(deleteId)), [dispatch]);
  const onCheckTodo = useCallback((checkId) => () => dispatch(checkTodo(checkId)), [dispatch]);
  const onEditTodo = useCallback(
    ({id, text}) => () => {
      dispatch(editTodo({id, text}));
    },
    [dispatch]
  );
  const onControlInput = useCallback(() => {
    dispatch(controlInput());
  }, [dispatch]);

  return {
    todolist,
    inputOpen,
    editDone,
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onControlInput,
    onEditTodo,
  };
}
