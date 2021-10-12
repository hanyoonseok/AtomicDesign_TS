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
import {ActionType} from 'typesafe-actions'

import { IPlayer } from '../types/player';

export interface StateProps {
  players: IPlayer[];
}
export const initialState: StateProps = {
  players: [],
};

export const loadPlayer = (data?: any) => ({
  type: LOAD_PLAYER,
  data,
});
export const deletePlayer = (data?: string) => ({
  type: DELETE_PLAYER,
  data,
});
export const addPlayer = (data: IPlayer) => ({
  type: ADD_PLAYER,
  data,
});

export type PlayerAction =
  | ReturnType<typeof loadPlayer>
  | ReturnType<typeof deletePlayer>
  | ReturnType<typeof addPlayer>;

const player = (state = initialState, action: PlayerAction) => {
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
      case ADD_PLAYER_SUCCESS:
        draft.players.unshift(action.data);
        break;
      case ADD_PLAYER_ERROR:
        break;
      case DELETE_PLAYER:
        break;
      case DELETE_PLAYER_SUCCESS:
        draft.players = draft.players.filter((v)=>v.id !== action.data)
        break;
      case DELETE_PLAYER_ERROR:
        break;
      default:
        return state;
    }
  });
};
export type PlayerRootState = ReturnType<typeof player>;
export default player;
