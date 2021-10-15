import { takeLatest, put, fork, all } from 'redux-saga/effects';
import {
  SCORE_DOWN,
  SCORE_DOWN_ERROR,
  SCORE_DOWN_SUCCESS,
  SCORE_UP,
  SCORE_UP_ERROR,
  SCORE_UP_SUCCESS,
} from '../../constants';
import { ScoreAction } from './index';

function* scoreUp(action: ScoreAction) {
  try {
    yield put({
      type: SCORE_UP_SUCCESS,
      data:action.data
    });
  } catch (err) {
    yield put({
      type: SCORE_UP_ERROR,
      error: 'score up error',
    });
  }
}

function* scoreDown(action: ScoreAction) {
  try {
    yield put({
      type: SCORE_DOWN_SUCCESS,
      data:action.data
    });
  } catch (err) {
    yield put({
      type: SCORE_DOWN_ERROR,
      error: 'score up error',
    });
  }
}

function* watchScoreUp() {
  yield takeLatest(SCORE_UP, scoreUp);
}
function* watchScoreDown() {
  yield takeLatest(SCORE_DOWN, scoreDown);
}

export default function* scoreSaga() {
  yield all([fork(watchScoreUp), fork(watchScoreDown)]);
}
