import {
  SCORE_UP,
  SCORE_DOWN,
  SCORE_UP_SUCCESS,
  SCORE_DOWN_SUCCESS,
  SCORE_UP_ERROR,
  SCORE_DOWN_ERROR,
} from '../actions/constants';
import produce from 'immer';

type ScoreState={
  score:number;
}
export const initialState:ScoreState = {
  score: 0,
};

export const scoreUp = (score: number) => {
  return {
    type: SCORE_UP,
    data: score,
  };
};

export const scoreDown = (score: number) => {
  return {
    type: SCORE_DOWN,
    data: score,
  };
};

export type ScoreAction = 
| ReturnType<typeof scoreUp> 
| ReturnType<typeof scoreDown>;

const scoreReducer = (state:ScoreState = initialState, action: ScoreAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SCORE_UP:
        break;
      case SCORE_UP_SUCCESS:console.log('score up')
        draft.score += action.data;
        break;
      case SCORE_UP_ERROR:
        break;
      case SCORE_DOWN:
        break;
      case SCORE_DOWN_SUCCESS:
        draft.score -= action.data;
        break;
      case SCORE_DOWN_ERROR:
        break;
      default:
        return state;
    }
  });
};

export type ScoreRootState = ReturnType<typeof scoreReducer>;
export default scoreReducer;
