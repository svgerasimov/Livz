import {ThunkDispatch} from 'redux-thunk';
import {ActionType, AdvertsAction} from '../actions/newsActions';
import {AdvertsState} from '../reducers/newsReducer';
import {apartments} from '../../data/apartments';
import {delay, transformArrayOfObjectsToSingleObject} from '../../utility';
import {Apartment} from '../../data/types';
import {apiClinet} from '../../api';

export const fetchNews = () => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_NEWS_START,
    });

    let result;
    apiClinet.get('api/v1/news?limit=10').then((response) => {
      result = response.data.result;
    });

    delay(1000)
      .then((_) => {
        dispatch({
          type: ActionType.FETCH_NEWS_SUCCESS,
          payload: result,
        });
      })

      .catch((err) =>
        dispatch({
          type: ActionType.FETCH_NEWS_ERROR,
          payload: err.toString(),
        }),
      );
  };
};
