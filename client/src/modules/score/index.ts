import {
  SCORE_UP,
  SCORE_DOWN,
  SCORE_UP_SUCCESS,
  SCORE_DOWN_SUCCESS,
  SCORE_UP_ERROR,
  SCORE_DOWN_ERROR,
} from '../../constants';
import produce from 'immer';

export interface StateProps{
  score:number;
}
export const initialState:StateProps = {
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

const score = (state= initialState, action: ScoreAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SCORE_UP:
        break;
      case SCORE_UP_SUCCESS:
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

export type ScoreRootState = ReturnType<typeof score>;
export default score;
