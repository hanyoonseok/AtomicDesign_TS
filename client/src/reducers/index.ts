import { combineReducers } from 'redux';
import playerReducer from './player';
import scoreReducer from './score';

const rootReducer = combineReducers({
  playerReducer,
  scoreReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

