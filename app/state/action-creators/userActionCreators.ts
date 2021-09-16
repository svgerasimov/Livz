import {ActionType, UserAction} from '../actions/userActions';
import {ThunkDispatch} from 'redux-thunk';
import {UserState} from '../reducers/userReducer';
import {apiClinet} from '../../api';
import { store } from '../store';

export const register = (user: any) => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>, getState) => {
    try {
      apiClinet.post(
        `/api/v1/register?password=${user.password}&phone=${
          getState().user.phone
        }`,
        {},
      );
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchUserData = () => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>, getState) => {
    try {
      let result;
      apiClinet
        .get('/api/v1/user/profile', {headers: {Authorization: 'Bearer ' + store.getState().auth.token},})
        .then((response) => {
          result = response.data.result;
          console.log(result, 'user');
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.SET_DATA,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchNotification = () => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>, getState) => {
    try {
      let result;
      apiClinet
        .get('/api/v1/notifications?limit=20', {headers: {Authorization: 'Bearer ' + store.getState().auth.token},})
        .then((response) => {
          result = response.data.result;
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.SET_NOTIFICATION,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const UpdateUserData = (params: any) => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>) => {
    try {
      let result;
      apiClinet
        .post('/api/v1/user/update', {
          email: params.email ? params.email : undefined,
          old_password: params.old_password ? params.old_password : undefined,
          new_password: params.new_password ? params.new_password : undefined,
          phone: params.phone ? params.phone : undefined,
        }, {headers: {Authorization: 'Bearer ' + store.getState().auth.token},})
        .then((response) => {
          fetchUserData();
        });
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const UpdateUserImage = (image: any) => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>) => {
    try {
      let result;
      apiClinet
        .post('/api/v1/user/update', {
          image: image,
        }, {headers: {Authorization: 'Bearer ' + store.getState().auth.token},})
        .then((response) => {
          fetchUserData();
        });
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const AddApplication = (phone: string, type: string) => {
  return (dispatch: ThunkDispatch<UserState, void, UserAction>) => {
    try {
      apiClinet.post(
        '/api/v1/user/update',
        {},
        {
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
          params: {phone, type},
        },
      );
    } catch (err) {
      dispatch({
        type: ActionType.SET_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const setAvatar = (photo: any) => ({
  type: ActionType.SET_AVATAR,
  payload: photo,
});

export const setPhone = (phone: string) => ({
  type: ActionType.SET_PHONE,
  payload: phone,
});
