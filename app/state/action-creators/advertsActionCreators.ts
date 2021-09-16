import {ThunkDispatch} from 'redux-thunk';
import {ActionType, AdvertsAction} from '../actions/advertsActions';
import {AdvertsState} from '../reducers/advertsReducer';
import {apartments} from '../../data/apartments';
import {delay, transformArrayOfObjectsToSingleObject} from '../../utility';
import {Apartment} from '../../data/types';
import {apiClinet} from '../../api';
import {store} from '../store';

export const fetchAdverts = (
  parameters: any = undefined,
  isFilters = false,
) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_ADVERTS_START,
      payload: parameters,
    });

    // if (!isFilters) {
    try {
      let result = [];
      apiClinet
        .get('api/v1/ad/find', {params: parameters})
        .then((response) => {
          console.log(response);
          result = response.data.result.map((value) => {
            return {...value, isFavorite: false, isFilters: isFilters};
          });
          console.log(result);
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
    // }
  };
};

export const SetRecommendations = (
  parameters: any = undefined,
  isFilters = false,
) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    try {
      let result = [];
      if (isFilters) {
        apiClinet.post('api/v1/ad/recommendations', {}, {params: parameters});
      } else {
        apiClinet
          .get('api/v1/ad/recommendations', {params: parameters})
          .then((response) => {
            result = response.data.result.map((value) => {
              return {...value, isFavorite: false, isFilters: isFilters};
            });
            console.log(result);
          })
          .then((_) => {
            dispatch({
              type: ActionType.SET_RECOMMENDATION,
              payload: result,
            });
          });
      }
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_ADVERTS_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchSingleAdvert = (id: number) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_SINGLE_ADVERT_START,
    });

    try {
      let result;
      apiClinet
        .get('api/v1/ad', {params: {id: id}})
        .then((response) => {
          console.log(response);
          result = response.data.result;
        })
        .then((_) => {
          dispatch({
            type: ActionType.FETCH_SINGLE_ADVERT_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_SINGLE_ADVERT_ERROR,
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
        console.log(response);
        result = response.data.result;
      })
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
        .get('/api/v1/favorites', {
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
        })
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
            headers: {Authorization: 'Bearer ' + store.getState().auth.token},
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
    // dispatch({
    //   type: ActionType.ADD_ADVERT,
    //   payload: advert,
    // });

    let result;
    apiClinet
      .post(
        'api/v1/ad',
        {
          attributes: advert.attributes,
          images: advert.images,
        },
        {
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
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

export const UpdateAdvert = (advert: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.ADD_ADVERT,
      payload: advert,
    });

    let result;
    apiClinet
      .post(
        'api/v1/ad/update',
        {
          attributes: advert.attributes,
          images: advert.images,
        },
        {
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
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
      apiClinet.delete(`/api/v1/ad/delete?ad_id=${id}`, {
        headers: {Authorization: 'Bearer ' + store.getState().auth.token},
      });
    } catch (err) {
      dispatch({
        type: ActionType.UPDATE_FAVORITE_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const fetchDocuments = (ad_id: number) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.FETCH_DOCUMENTS_START,
    });

    try {
      let result;
      apiClinet
        .get('/api/v1/documents', {
          params: {ad_id},
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
        })
        .then((response) => {
          console.log(response);
          result = response.data.result;
        })
        .then((_) => {
          console.log(result);
          dispatch({
            type: ActionType.FETCH_DOCUMENTS_SUCCESS,
            payload: result,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_DOCUMENTS_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const addDocuments = (ad_id: number, document: any, type: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.ADD_DOCUMENTS_START,
    });

    try {
      apiClinet
        .post(
          '/api/v1/documents',
          {
            document: document,
          },
          {
            params: {ad_id, type},
            headers: {Authorization: 'Bearer ' + store.getState().auth.token},
          },
        )
        .then((_) => {
          dispatch({
            type: ActionType.ADD_DOCUMENTS_SUCCESS,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_DOCUMENTS_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const deleteDocuments = (ad_id: number, document_id: any) => {
  return (dispatch: ThunkDispatch<AdvertsState, void, AdvertsAction>) => {
    dispatch({
      type: ActionType.DELETE_DOCUMENTS_START,
    });

    try {
      apiClinet
        .delete('/api/v1/documents', {
          params: {ad_id, document_id},
          headers: {Authorization: 'Bearer ' + store.getState().auth.token},
        })
        .then((_) => {
          dispatch({
            type: ActionType.DELETE_DOCUMENTS_SUCCESS,
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.DELETE_DOCUMENTS_ERROR,
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
