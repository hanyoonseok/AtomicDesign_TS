import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from '../actions/constants';
import produce from 'immer';

import { IUser } from '../types/user';

export interface StateProps {
  signupLoading: boolean;
  signupDone: boolean;
  signupError: boolean | null;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: boolean | null;
  logoutLoading: boolean;
  logoutDone: boolean;
  logoutError: boolean | null;
  me: IUser | null;
}
export const initialState: StateProps = {
  signupLoading: false,
  signupDone: false,
  signupError: false,
  loginLoading: false,
  loginDone: false,
  loginError: false,
  logoutLoading: false,
  logoutDone: false,
  logoutError: false,
  me:null,
};

export const signupUser = (data: IUser) => ({
  type: SIGNUP_USER,
  data,
});
export const loginUser = (data: IUser) => ({
  type: LOGIN_USER,
  data,
});
export const logoutUser = (data?: any) => ({
  type: LOGOUT_USER,
  data,
});
export type UserAction =
  | ReturnType<typeof signupUser>
  | ReturnType<typeof loginUser>
  | ReturnType<typeof logoutUser>;

const user = (state = initialState, action: UserAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.signupLoading = true;
        draft.signupError = null;
        draft.signupDone = false;
        break;
      case SIGNUP_USER_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGNUP_USER_ERROR:
        draft.signupLoading = false;
        draft.signupError = true;
        break;
      case LOGIN_USER:
        draft.loginLoading = true;
        draft.loginError = null;
        draft.loginDone = false;
        break;
      case LOGIN_USER_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data.data;
        break;
      case LOGIN_USER_ERROR:
        draft.loginLoading = false;
        draft.loginError = true;
        break;
      case LOGOUT_USER:
        draft.logoutLoading = true;
        draft.logoutError = null;
        draft.logoutDone = false;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;
      case LOGOUT_USER_ERROR:
        draft.logoutLoading = false;
        draft.logoutError = true;
        break;
    }
  });
};
export type UserRootState = ReturnType<typeof user>;
export default user;
