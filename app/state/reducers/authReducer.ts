import produce, {Draft} from 'immer';
import {AuthAction, ActionType} from '../actions/authActions';

export interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: false,
};

export const reducer = produce(
  (draft: Draft<AuthState>, action: AuthAction) => {
    switch (action.type) {
      case ActionType.LOGIN: {
        draft.auth = true;
        break;
      }
      case ActionType.LOGOUT: {
        draft.auth = false;
        break;
      }
    }
  },
  initialState,
);
