import {ThunkDispatch} from 'redux-thunk';
import {ActionType, AdvertsAction} from '../actions/advertsActions';
import {AdvertsState} from '../reducers/advertsReducer';
import {apartments} from '../../data/apartments';
import {delay, transformArrayOfObjectsToSingleObject} from '../../utility';
import {Apartment} from '../../data/types';
import {apiClinet} from '../../api';

export const fetchAdverts = (parameters: any = undefined) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_ADVERTS_START,
    });

    try {
      let result;
      apiClinet
        .get('api/v1/ad/find', parameters)
        .then((response) => {
          console.log(response);
          result = response.data.result;
        })
        .then((_) => {
          dispatch({
            type: ActionType.FETCH_ADVERTS_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_ADVERTS_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchCategories = () => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_CATEGORIES_START,
    });

    try {
      let result;
      apiClinet
        .get('api/v1/categories')
        .then((response) => {
          console.log(response);
          result = response.data.result;
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.FETCH_CATEGORIES_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_CATEGORIES_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchAttributes = (categoryId: number) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_ATTRIBUTES_START,
    });

    let result;
    apiClinet
      .get('api/v1/attributes', {
        params: {
          category_id: categoryId,
        },
      })
      .then((response) => {
        result = response.data.result;
      });

    delay(1000)
      .then((_) => {
        dispatch({
          type: ActionType.FETCH_ATTRIBUTES_SUCCESS,
          payload: result,
        });
      })

      .catch((err) =>
        dispatch({
          type: ActionType.FETCH_ATTRIBUTES_ERROR,
          payload: err.toString(),
        }),
      );
  };
};

export const fetchFavorite = () => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_FAVORITE_START,
    });

    try {
      let result;
      apiClinet
        .get('/api/v1/favorites')
        .then((response) => {
          console.log(response);
          result = response.data.result;
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.FETCH_FAVORITE_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_FAVORITE_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const UpdateFavorite = (id: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.UPDATE_FAVORITE_START,
    });

    try {
      let result;
      apiClinet
        .post(
          `/api/v1/favorites/update`,
          {},
          {
            params: {
              ad_id: id,
              action: 'switch',
            },
          },
        )
        .then((response) => {
          result = response.data.result;
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.UPDATE_FAVORITE_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.UPDATE_FAVORITE_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const AddAdvert = (advert: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.ADD_ADVERT,
      payload: advert,
    });

    let result;
    apiClinet
      .post(
        'api/v1/ad',
        {
          attributes: advert.attributes,
        },
        {
          params: {
            category_id: advert.categoryId,
            area: advert.area,
            address: advert.address,
            name: advert.name,
            description: advert.description,
            price: advert.price,
            remuniration: advert.remuniration,
            phone: advert.phone,
          },
        },
      )
      .then((response) => {
        result = response.data.result;
      });

    delay(1000)
      .then((_) => {
        dispatch({
          type: ActionType.FETCH_ATTRIBUTES_SUCCESS,
          payload: result,
        });
      })

      .catch((err) =>
        dispatch({
          type: ActionType.FETCH_ATTRIBUTES_ERROR,
          payload: err.toString(),
        }),
      );
  };
};

export const DeleteAdvert = (id: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {

    try {
      apiClinet.delete(`/api/v1/ad/delete?ad_id=${id}`);
    } catch (err) {
      dispatch({
        type: ActionType.UPDATE_FAVORITE_ERROR,
        payload: err.toString(),
      });
    }
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
export const UpdateAccountType = (type: string) => ({
  type: ActionType.UPDATE_ACCOUNT_TYPE,
  payload: type,
});
