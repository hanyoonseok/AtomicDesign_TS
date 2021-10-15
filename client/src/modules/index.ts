import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import player from './player';
import score from './score';
import todo from './todo';
import user from './user';
import playerSaga from './player/saga';
import scoreSaga from './score/saga';
import userSaga from './user/saga';
import todoSaga from './todo/saga';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true; //saga에서 보내는 axios는 전부 쿠키를 포함한다.

const rootReducer = combineReducers({
  player,
  score,
  todo,
  user,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(): Generator {
  yield all([
    fork(playerSaga), // fork는 이 함수를 실행한다는 것.
    fork(scoreSaga),
    fork(todoSaga),
    fork(userSaga),
  ]);
}
