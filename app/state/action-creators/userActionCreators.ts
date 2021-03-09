import {ActionType} from '../actions/userActions';


export const setAvatar = (photo: any) => ({
  type: ActionType.SET_AVATAR,
  payload: photo,
});

