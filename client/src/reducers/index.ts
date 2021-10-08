import { combineReducers } from 'redux';
import player from './player';
import score from './score';

const rootReducer = combineReducers({
  player,
  score,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

