export enum ActionType {
  LOGOUT = 'LOGINOUT',
  LOGIN = 'LOGIN',
}

interface LoginAction {
  type: ActionType.LOGIN;
  payload: any;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
