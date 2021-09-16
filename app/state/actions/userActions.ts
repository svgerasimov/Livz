// import {Apartment, Adverts} from '../../data/types';

export enum ActionType {
  SET_AVATAR = 'set_avatar',
  SET_PHONE = 'set_phone',
  SET_DATA = 'set_data',
  UPDATE_DATA = 'update_data',
  SET_REGISTRATION = 'set_registration',
  SET_NOTIFICATION = 'set_notification',
  SET_ERROR = 'set_error',
  ADD_SERVICE_APPLICATION = 'add_service_application',
}

interface SetAvatarAction {
  type: ActionType.SET_AVATAR;
  payload: any;
}
interface SetPhoneAction {
  type: ActionType.SET_PHONE;
  payload: any;
}

interface SetDataAction {
  type: ActionType.SET_DATA;
  payload: any;
}

interface UpdateDataAction {
  type: ActionType.UPDATE_DATA;
  payload: any;
}

interface SetNotificationAction {
  type: ActionType.SET_NOTIFICATION;
  payload: any;
}

interface AddServiceApplicationAction {
  type: ActionType.ADD_SERVICE_APPLICATION;
  payload: any;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: any;
}

export type UserAction =
  | SetAvatarAction
  | SetPhoneAction
  | SetErrorAction
  | SetDataAction
  | UpdateDataAction
  | AddServiceApplicationAction
  | SetNotificationAction;
