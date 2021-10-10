import { all, fork } from 'redux-saga/effects';

import scoreSaga from './score';
import playerSaga from './player';
import todoSaga from './todo';

export default function* rootSaga():Generator {
  yield all([
    fork(playerSaga),// fork는 이 함수를 실행한다는 것.
    fork(scoreSaga), 
    fork(todoSaga), 
  ]);
}
