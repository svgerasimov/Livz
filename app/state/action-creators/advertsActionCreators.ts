import {ThunkDispatch} from 'redux-thunk';
import {ActionType, AdvertsAction} from '../actions/advertsActions';
import {AdvertsState} from '../reducers/advertsReducer';
import {apartments} from '../../data/apartments';
import {delay, transformArrayOfObjectsToSingleObject} from '../../utility';
import {Apartment} from '../../data/types';

export const fetchAdverts = () => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_ADVERTS_START,
    });

    delay(1000)
      .then((_) => {
        const mappedAdverts = transformArrayOfObjectsToSingleObject<Apartment>(
          apartments,
        );
        dispatch({
          type: ActionType.FETCH_ADVERTS_SUCCESS,
          payload: mappedAdverts,
        });
      })

      .catch((err) =>
        dispatch({
          type: ActionType.FETCH_ADVERTS_ERROR,
          payload: err.toString(),
        }),
      );
  };
};

export const LikeAdvert = (id: string) => ({
  type: ActionType.LIKE_ADVERT,
  payload: id,
});
export const UnlikeAdvert = (id: string) => ({
  type: ActionType.UNLIKE_ADVERT,
  payload: id,
});
export const AddAdvert = (advert: Apartment) => ({
  type: ActionType.ADD_ADVERT,
  payload: advert,
});
