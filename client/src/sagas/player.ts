import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  LOAD_PLAYER,
  LOAD_PLAYER_ERROR,
  LOAD_PLAYER_SUCCESS,
  ADD_PLAYER,
  ADD_PLAYER_ERROR,
  ADD_PLAYER_SUCCESS,
  DELETE_PLAYER,
  DELETE_PLAYER_ERROR,
  DELETE_PLAYER_SUCCESS,
} from '../actions/constants';
import { PlayerAction } from '../reducers/player';

function loadPlayerAPI(){

}
function* loadPlayer(action: PlayerAction): Generator {
  try {
    yield put({
      type: LOAD_PLAYER_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOAD_PLAYER_ERROR,
      error: 'load player error',
    });
  }
}

function addPlayerAPI(data:PlayerAction){
  return axios.post(`/user/add`, data);
}
function* addPlayer(action: PlayerAction): Generator {
  const result = action.data;//yield call(addPlayerAPI, action.data);
  try {
    yield put({
      type: ADD_PLAYER_SUCCESS,
      data:result
    });
  } catch (err) {
    yield put({
      type: ADD_PLAYER_ERROR,
      error: 'add player error',
    });
  }
}

function* deletePlayer(action: PlayerAction): Generator {
  try {
    yield put({
      type: DELETE_PLAYER_SUCCESS,
      data:action.data
    });
  } catch (err) {
    yield put({
      type: DELETE_PLAYER_ERROR,
      error: 'delete player error',
    });
  }
}

//액션 감지 함수
function* watchLoadPlayer() {
  yield takeLatest(LOAD_PLAYER, loadPlayer);
}
function* watchAddPlayer() {
  yield takeLatest(ADD_PLAYER, addPlayer);
}
function* watchDeletePlayer() {
  yield takeLatest(DELETE_PLAYER, deletePlayer);
}

export default function* playerSaga() {
  yield all([fork(watchLoadPlayer), fork(watchAddPlayer), fork(watchDeletePlayer)]);
}
