import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
} from '../actions/constants';
import { UserAction } from '../reducers/user';

function signupUserAPI(data:UserAction){
    return axios.post('/user/signup', data);
}
function* signupUser(action: UserAction): Generator {
  const result = yield call(signupUserAPI, action.data);
  try {
    yield put({
      type: SIGNUP_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_USER_ERROR,
      error: 'signup user error',
    });
  }
}

function loginUserAPI(data:UserAction){
    return axios.post('/user/login', data);
}
function* loginUser(action: UserAction): Generator {
  const result = yield call(loginUserAPI, action.data);
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
function* watchSignupUser() {
  yield takeLatest(SIGNUP_USER, signupUser);
}
function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUser);
}
function* watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUser);
}

export default function* userSaga() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchSignupUser)]);
}
