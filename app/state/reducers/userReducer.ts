import produce, {Draft} from 'immer';
import {UserAction, ActionType} from '../actions/userActions';

export interface UserState {
  avatar: any
}

const initialState: UserState = {
  avatar: null
};

export const reducer = produce(
  (draft: Draft<UserState>, action: UserAction) => {
    switch (action.type) {
      case ActionType.SET_AVATAR: {
        draft.avatar = action.payload;
        break;
      }
    }
  },
  initialState,
);
