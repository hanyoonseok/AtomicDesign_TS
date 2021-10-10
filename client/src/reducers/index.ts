import { combineReducers } from 'redux';
import player from './player';
import score from './score';
import todo from './todo'

const rootReducer = combineReducers({
  player,
  score,
  todo,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

