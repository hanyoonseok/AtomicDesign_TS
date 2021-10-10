import { takeLatest, put, fork, all } from 'redux-saga/effects';
import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  CHECK_TODO,
  CHECK_TODO_ERROR,
  CHECK_TODO_SUCCESS,
} from '../actions/constants';
import { TodoAction } from '../reducers/todo';

function* addTodo(action: TodoAction): Generator {
  try {
    const result = action.data;
    yield put({
      type: ADD_TODO_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: ADD_TODO_ERROR,
      error: 'add todo error',
    });
  }
}

function* deleteTodo(action: TodoAction): Generator {
  const result = action.data;
  try {
    yield put({
      type: DELETE_TODO_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: DELETE_TODO_ERROR,
      error: 'delete todo error',
    });
  }
}

function* checkTodo(action: TodoAction): Generator {
  try {
    yield put({
      type: CHECK_TODO_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: CHECK_TODO_ERROR,
      error: 'check todo error',
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO, addTodo);
}
function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO, deleteTodo);
}
function* watchCheckTodo() {
  yield takeLatest(CHECK_TODO, checkTodo);
}

export default function* playerSaga() {
  yield all([fork(watchAddTodo), fork(watchDeleteTodo), fork(watchCheckTodo)]);
}
