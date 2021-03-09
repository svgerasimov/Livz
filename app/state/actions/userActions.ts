// import {Apartment, Adverts} from '../../data/types';

export enum ActionType {
  SET_AVATAR = 'set_avatar',
}

interface SetAvatarAction {
  type: ActionType.SET_AVATAR;
  payload: any;
}

export type UserAction = SetAvatarAction;
