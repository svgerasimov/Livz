import produce, {Draft} from 'immer';
import {UserAction, ActionType} from '../actions/userActions';

export interface UserState {
  avatar: any;
  user: {
    phone: string;
    mail: string;
  };
  error: string;
  notification: any;
}

const initialState: UserState = {
  avatar: null,
  user: {
    phone: '',
    mail: '',
  },
  error: '',
  notification: [],
};

export const reducer = produce(
  (draft: Draft<UserState>, action: UserAction) => {
    switch (action.type) {
      case ActionType.SET_AVATAR: {
        draft.avatar = action.payload;
        break;
      }
      case ActionType.SET_PHONE: {
        draft.user.phone = action.payload;
        break;
      }
      case ActionType.SET_DATA: {
        draft.user = action.payload;
        break;
      }
      case ActionType.UPDATE_DATA: {
        draft.user = {...draft.user, ...action.payload};
        break;
      }
      case ActionType.SET_NOTIFICATION: {
        draft.notification = action.payload;
        break;
      }
      case ActionType.SET_ERROR: {
        draft.error = action.payload;
        break;
      }
    }
  },
  initialState,
);
