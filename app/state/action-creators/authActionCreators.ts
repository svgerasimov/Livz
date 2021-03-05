import {ActionType, AuthAction} from '../actions/authActions';

export const login = () => ({
  type: ActionType.LOGIN,
});
export const logout = () => ({
  type: ActionType.LOGOUT,
});
