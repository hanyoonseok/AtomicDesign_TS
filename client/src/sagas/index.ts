import { all, fork } from 'redux-saga/effects';
import axios from 'axios'

import scoreSaga from './score';
import playerSaga from './player';
import todoSaga from './todo';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials=true; //saga에서 보내는 axios는 전부 쿠키를 포함한다.

export default function* rootSaga():Generator {
  yield all([
    fork(playerSaga),// fork는 이 함수를 실행한다는 것.
    fork(scoreSaga), 
    fork(todoSaga), 
    fork(userSaga),
  ]);
}
