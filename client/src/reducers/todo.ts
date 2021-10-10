import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  CHECK_TODO,
  CHECK_TODO_SUCCESS,
  CHECK_TODO_ERROR,
  CONTROL_INPUT,
} from '../actions/constants';
import produce from 'immer';

import { ITodoList } from '../types/todo';

export interface StateProps {
  todolist: ITodoList;
  inputOpen: boolean;
}
export const initialState: StateProps = {
  todolist: {
    todos: [],
    todoNum: 0,
  },
  inputOpen: false,
};

export const deleteTodo = (data?: string) => ({
  type: DELETE_TODO,
  data,
});
export const addTodo = (data: string) => ({
  type: ADD_TODO,
  data,
});
export const checkTodo = (data: string) => ({
  type: CHECK_TODO,
  data,
});
export const controlInput = (data?: any) => ({
  type: CONTROL_INPUT,
  data,
});

export type TodoAction =
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof controlInput>;

const todo = (state = initialState, action: TodoAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODO:
        break;
      case ADD_TODO_SUCCESS:
        const dummy = {
          id: draft.todolist.todoNum,
          text: action.data,
          isDone: false,
        };
        draft.todolist.todos.unshift(dummy);
        break;
      case ADD_TODO_ERROR:
        break;
      case DELETE_TODO:
        break;
      case DELETE_TODO_SUCCESS:
        draft.todolist.todos = draft.todolist.todos.filter((v) => v.id !== action.data);
        break;
      case DELETE_TODO_ERROR:
        break;
      case CHECK_TODO:
        break;
      case CHECK_TODO_SUCCESS:
        draft.todolist.todos = draft.todolist.todos.filter((v) => v.id !== action.data);
        break;
      case CHECK_TODO_ERROR:
        break;
      case CONTROL_INPUT:
        draft.inputOpen = !draft.inputOpen;
        break;
    }
  });
};
export type TodoRootState = ReturnType<typeof todo>;
export default todo;
