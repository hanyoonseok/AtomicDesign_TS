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
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_ERROR,
  CONTROL_INPUT,
} from '../../constants';
import produce from 'immer';
import { nanoid } from 'nanoid';

import { ITodoList } from '../../types/todo';

export interface StateProps {
  todolist: ITodoList;
  inputOpen: boolean;
  editLoading: boolean;
  editDone: boolean;
  editError: boolean | null;
}
export const initialState: StateProps = {
  todolist: {
    todos: [],
    todoNum: 0,
  },
  inputOpen: false,
  editLoading: false,
  editDone: false,
  editError: null,
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
export const editTodo = (data?:any) => ({
  type: EDIT_TODO,
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
  | ReturnType<typeof editTodo>
  | ReturnType<typeof controlInput>;

const todo = (state = initialState, action: TodoAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODO:
        break;
      case ADD_TODO_SUCCESS:
        const random = nanoid(10);
        const dummy = {
          id: random,
          text: action.data,
          isDone: false,
        };
        draft.todolist.todos.unshift(dummy);
        draft.todolist.todoNum = draft.todolist.todoNum + 1;
        draft.inputOpen = false;
        break;
      case ADD_TODO_ERROR:
        break;
      case DELETE_TODO:
        break;
      case DELETE_TODO_SUCCESS:
        draft.todolist.todos = draft.todolist.todos.filter((v) => v.id !== action.data);
        draft.todolist.todoNum = draft.todolist.todoNum - 1;
        draft.inputOpen = false;
        break;
      case DELETE_TODO_ERROR:
        break;
      case CHECK_TODO:
        break;
      case CHECK_TODO_SUCCESS:
        draft.todolist.todos.filter((v) => (v.id === action.data ? (v.isDone = !v.isDone) : ''));
        break;
      case CHECK_TODO_ERROR:
        break;
      case EDIT_TODO:
        draft.editLoading=true;
        draft.editDone=false;
        draft.editError=null;
        break;
      case EDIT_TODO_SUCCESS:
        draft.editDone=true;
        draft.editLoading=false;
        draft.todolist.todos.filter((v) => (v.id === action.data.id ? (v.text = action.data.text) : ''));
        break;
      case EDIT_TODO_ERROR:
        draft.editError=true;
        draft.editLoading=false;
        break;
      case CONTROL_INPUT:
        draft.inputOpen = !draft.inputOpen;
        break;
    }
  });
};
export type TodoRootState = ReturnType<typeof todo>;
export default todo;
