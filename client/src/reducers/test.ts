import { SCORE_UP_SUCCESS, SCORE_DOWN_SUCCESS } from '../actions/constants';
import { ScoreAction } from '../actions/actions';

const initialState = {
  score: 0,
};

const reducer = (state = initialState, action: ScoreAction) => {
  const newState = { ...state };
  switch (action.type) {
    case SCORE_UP_SUCCESS:
      newState.score += 1;
      return newState;
    case SCORE_DOWN_SUCCESS:
      newState.score -= 1;
      return newState;
    default:
      return state;
  }
};
export type TestRootState = ReturnType<typeof reducer>;
export default reducer;
