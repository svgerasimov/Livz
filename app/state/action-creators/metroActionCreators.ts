import {ThunkDispatch} from 'redux-thunk';
import {ActionType, MetroAction} from '../actions/metroActions';
import {MetroState} from '../reducers/metroReducers';
import {delay} from '../../utility';
import {apiClinet} from '../../api';

export const fetchMetro = () => {
  return (dispatch: ThunkDispatch<MetroState, void, MetroAction>) => {
    dispatch({
      type: ActionType.FETCH_METRO_START,
    });

    let result = [];
    apiClinet.get('api/v1/metros').then((response) => {
      response.data.result.forEach((el) => result.push(...el.childrens));
    });

    delay(1000)
      .then((_) => {
        dispatch({
          type: ActionType.FETCH_METRO_SUCCESS,
          payload: result,
        });
      })

      .catch((err) =>
        dispatch({
          type: ActionType.FETCH_METRO_ERROR,
          payload: err.toString(),
        }),
      );
  };
};
