import produce, {Draft} from 'immer';
import {AuthAction, ActionType} from '../actions/authActions';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const reducer = produce(
  (draft: Draft<AuthState>, action: AuthAction) => {
    switch (action.type) {
      case ActionType.LOGIN: {
        draft.token = action.payload;
        break;
      }
      case ActionType.LOGOUT: {
        draft.token = '';
        break;
      }
    }
  },
  initialState,
);
