import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
} from '../actions/constants';
import { UserAction } from '../reducers/user';

function* loginUser(action: UserAction): Generator {
  const result = action.data; //yield call(addPlayerAPI, action.data);
  try {
    yield put({
      type: LOGIN_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOGIN_USER_ERROR,
      error: 'login user error',
    });
  }
}
function* logoutUser(action: UserAction): Generator {
  const result = action.data; //yield call(addPlayerAPI, action.data);
  try {
    yield put({
      type: LOGOUT_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_USER_ERROR,
      error: 'logout user error',
    });
  }
}

//액션 감지 함수
function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUser);
}
function* watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUser);
}

export default function* userSaga() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser)]);
}
