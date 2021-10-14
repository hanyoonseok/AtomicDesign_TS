import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
  } from '../actions/constants';
  import produce from 'immer';
  
  import { IUser } from '../types/user';
  
  export interface StateProps {
    loginLoading:boolean;
    loginDone:boolean;
    loginError:boolean | null;
    me:IUser | null;
  }
  export const initialState: StateProps = {
    loginLoading:false,
    loginDone:false,
    loginError:false,
    me:null,
  };
  
  export const loginUser = (data:IUser) => ({
    type: LOGIN_USER,
    data,
  });
  export const logoutUser = (data?:any) => ({
    type: LOGOUT_USER,
    data,
  });
  export type UserAction =
    | ReturnType<typeof loginUser>
    | ReturnType<typeof logoutUser>
  
  const user = (state = initialState, action: UserAction) => {
    return produce(state, (draft) => {
      switch (action.type) {
        case LOGIN_USER:
            draft.loginLoading=true;
            draft.loginError=null;
            draft.loginDone=false;
          break;
        case LOGIN_USER_SUCCESS:
            draft.loginLoading=false;
            draft.loginDone=true;
            draft.me = action.data;
          break;
        case LOGIN_USER_ERROR:
            draft.loginLoading=false;
            draft.loginError=true;
          break;
        case LOGOUT_USER:
          break;
        case LOGOUT_USER_SUCCESS:
          break;
        case LOGOUT_USER_ERROR:
          break;
      }
    });
  };
  export type UserRootState = ReturnType<typeof user>;
  export default user;
  