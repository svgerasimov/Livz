import {ActionType, AuthAction} from '../actions/authActions';
import {ThunkDispatch} from 'redux-thunk';
import {AuthState} from '../reducers/authReducer';
import {apiClinet} from '../../api';

export const login = (data: any) => {
  return (dispatch: ThunkDispatch<AuthState, void, AuthAction>, getState) => {
    try {
      let result;
      apiClinet
        .post(
          `/api/v1/login?login=${
            data?.login || getState().user?.phone
          }&password=${data.password}`,
          {},
        )
        .then((response) => {
          result = response.data.result;
        })
        .then((_) => {
          dispatch({
            type: ActionType.LOGIN,
            payload: result,
          });
        });
    } catch (err) {}
  };
};

export const loginWithoutRegistration = () => {
  return (dispatch: ThunkDispatch<AuthState, void, AuthAction>) => {
    try {
      dispatch({
        type: ActionType.LOGIN,
        payload: '1',
      });
    } catch (err) {}
  };
};

export const logout = () => ({
  type: ActionType.LOGOUT,
});
