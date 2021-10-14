import { combineReducers } from 'redux';
import player from './player';
import score from './score';
import todo from './todo'
import user from './user'

const rootReducer = combineReducers({
  player,
  score,
  todo,
  user
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

