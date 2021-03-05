export enum ActionType {
  LOGOUT = 'LOGINOUT',
  LOGIN = 'LOGIN',
}

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
