import {takeLatest, put, delay, all} from 'redux-saga/effects';
import {
    SCORE_DOWN,
    SCORE_DOWN_SUCCESS,
    SCORE_UP,
    SCORE_UP_SUCCESS,
} from '../actions/constants';

function* scoreUpAsync(){
    yield put({
        type:SCORE_UP_SUCCESS,
        SCORE:1
    })
}

function* scoreDownAsync(){
    yield put({
        type:SCORE_DOWN_SUCCESS,
        SCORE:1
    })
}

function* watchScoreUp(){
    yield takeLatest(SCORE_UP, scoreUpAsync);
}
function* watchScoreDown(){
    yield takeLatest(SCORE_DOWN, scoreDownAsync);
}

export default function* rootSaga(){
    yield all([watchScoreUp(), watchScoreDown()]);
}