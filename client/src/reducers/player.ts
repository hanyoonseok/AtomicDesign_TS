import {
  LOAD_PLAYER,
  LOAD_PLAYER_SUCCESS,
  LOAD_PLAYER_ERROR,
  ADD_PLAYER,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_ERROR,
  DELETE_PLAYER,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_ERROR,
} from '../actions/constants';
import produce from 'immer';
import { PlayerType } from '../types/player';

interface StateProps{
    players:PlayerType[]
}
export const initialState:StateProps = {
  players:[],
};

export const loadPlayer = () => {
  return {
    type: LOAD_PLAYER,
  };
};

export const addPlayer = () => {
  return {
    type: ADD_PLAYER,
  };
};
export const deletePlayer = () => {
  return {
    type: DELETE_PLAYER,
  };
};

export type PlayerAction =
  | ReturnType<typeof loadPlayer>
  | ReturnType<typeof addPlayer>
  | ReturnType<typeof deletePlayer>;

const playerReducer = (state = initialState, action: PlayerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PLAYER:
        break;
      case LOAD_PLAYER_SUCCESS:
        break;
      case LOAD_PLAYER_ERROR:
        break;
      case ADD_PLAYER:
        break;
      case ADD_PLAYER_SUCCESS:console.log('d');
        const dummy={
            nickname:"nick",
            age:20,
        }
          draft.players.unshift(dummy);
        break;
      case ADD_PLAYER_ERROR:
        break;
      case DELETE_PLAYER:
        break;
      case DELETE_PLAYER_SUCCESS:
        break;
      case DELETE_PLAYER_ERROR:
        break;
      default:
        return state;
    }
  });
};
export type PlayerRootState = ReturnType<typeof playerReducer>;
export default playerReducer;
