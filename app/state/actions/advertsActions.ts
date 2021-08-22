import {Apartment, Adverts} from '../../data/types';

export enum ActionType {
  FETCH_ADVERTS_START = 'fetch_adverts_start',
  FETCH_ADVERTS_SUCCESS = 'fetch_adverts_success',
  FETCH_ADVERTS_ERROR = 'fetch_adverts_error',
  FETCH_CATEGORIES_START = 'fetch_categories_start',
  FETCH_CATEGORIES_SUCCESS = 'fetch_categories_success',
  FETCH_CATEGORIES_ERROR = 'fetch_categories_error',
  FETCH_ATTRIBUTES_START = 'fetch_attributes_start',
  FETCH_ATTRIBUTES_SUCCESS = 'fetch_attributes_success',
  FETCH_ATTRIBUTES_ERROR = 'fetch_attributes_error',
  FETCH_FAVORITE_START = 'fetch_favorite_start',
  FETCH_FAVORITE_SUCCESS = 'fetch_favorite_success',
  FETCH_FAVORITE_ERROR = 'fetch_favorite_error',
  UPDATE_FAVORITE_START = 'update_favorite_start',
  UPDATE_FAVORITE_SUCCESS = 'update_favorite_success',
  UPDATE_FAVORITE_ERROR = 'update_favorite_error',
  LIKE_ADVERT = 'like_advert',
  UNLIKE_ADVERT = 'unlike_advert',
  ADD_ADVERT = 'add_advert',
  DEL_ADVERT = 'del_advert',
  UPDATE_ACCOUNT_TYPE = 'update_account_type',
}

interface FetchAdvertsStartAction {
  type: ActionType.FETCH_ADVERTS_START;
}

interface FetchAdvertsSuccessAction {
  type: ActionType.FETCH_ADVERTS_SUCCESS;
  payload: Adverts;
}

interface FetchAdvertsErrorAction {
  type: ActionType.FETCH_ADVERTS_ERROR;
  payload: string;
}

interface FetchCategoriesStartAction {
  type: ActionType.FETCH_CATEGORIES_START;
}

interface FetchCategoriesSuccessAction {
  type: ActionType.FETCH_CATEGORIES_SUCCESS;
  payload: any;
}

interface FetchCategoriesErrorAction {
  type: ActionType.FETCH_CATEGORIES_ERROR;
  payload: string;
}

interface FetchAttributesStartAction {
  type: ActionType.FETCH_ATTRIBUTES_START;
}

interface FetchAttributesSuccessAction {
  type: ActionType.FETCH_ATTRIBUTES_SUCCESS;
  payload: any;
}

interface FetchAttributesErrorAction {
  type: ActionType.FETCH_ATTRIBUTES_ERROR;
  payload: string;
}

interface FetchFavoritesStartAction {
  type: ActionType.FETCH_FAVORITE_START;
}

interface FetchFavoritesSuccessAction {
  type: ActionType.FETCH_FAVORITE_SUCCESS;
  payload: any;
}

interface FetchFavoritesErrorAction {
  type: ActionType.FETCH_FAVORITE_ERROR;
  payload: string;
}

interface UpdateFavoritesStart {
  type: ActionType.UPDATE_FAVORITE_START;
}


interface UpdateFavoritesSuccess{
  type: ActionType.UPDATE_FAVORITE_SUCCESS;
  payload: any;
}

interface UpdateFavoritesError{
  type: ActionType.UPDATE_FAVORITE_ERROR;
  payload: string;
}

interface LikeAdvertAction {
  type: ActionType.LIKE_ADVERT;
  payload: string;
}
interface UnlikeAdvertAction {
  type: ActionType.UNLIKE_ADVERT;
  payload: string;
}
interface AddAdvertAction {
  type: ActionType.ADD_ADVERT;
  payload: Apartment;
}

interface UpdateAccountType {
  type: ActionType.UPDATE_ACCOUNT_TYPE;
  payload: string;
}

export type AdvertsAction =
  | FetchAdvertsStartAction
  | FetchAdvertsSuccessAction
  | FetchAdvertsErrorAction
  | FetchCategoriesStartAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction
  | FetchAttributesStartAction
  | FetchAttributesSuccessAction
  | FetchAttributesErrorAction
  | FetchFavoritesStartAction
  | FetchFavoritesSuccessAction
  | FetchFavoritesErrorAction
  | UpdateFavorites
  | LikeAdvertAction
  | UnlikeAdvertAction
  | AddAdvertAction
  | UpdateAccountType
  | UpdateFavoritesStart
  | UpdateFavoritesSuccess
  | UpdateFavoritesError;
