import {Apartment, Adverts} from '../../data/types';

export enum ActionType {
  FETCH_ADVERTS_START = 'fetch_adverts_start',
  FETCH_ADVERTS_SUCCESS = 'fetch_adverts_success',
  FETCH_ADVERTS_ERROR = 'fetch_adverts_error',
  SET_RECOMMENDATION = 'set_recommendation',
  SET_RECOMMENDATION_START = 'set_recommendation_start',
  FETCH_SINGLE_ADVERT_START = 'fetch_single_advert_start',
  FETCH_SINGLE_ADVERT_SUCCESS = 'fetch_single_advert_success',
  FETCH_SINGLE_ADVERT_ERROR = 'fetch_single_advert_error',
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
  FETCH_DOCUMENTS_START = 'fetch_documents_start',
  FETCH_DOCUMENTS_SUCCESS = 'fetch_documents_success',
  FETCH_DOCUMENTS_ERROR = 'fetch_documents_error',
  ADD_DOCUMENTS_START = 'add_documents_start',
  ADD_DOCUMENTS_SUCCESS = 'add_documents_success',
  ADD_DOCUMENTS_ERROR = 'add_documents_error',
  DELETE_DOCUMENTS_START = 'delete_documents_start',
  DELETE_DOCUMENTS_SUCCESS = 'delete_documents_success',
  DELETE_DOCUMENTS_ERROR = 'delete_documents_error',
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

interface SetRecommendationAction {
  type: ActionType.SET_RECOMMENDATION;
  payload: any;
}

interface FetchSingleAdvertStartAction {
  type: ActionType.FETCH_SINGLE_ADVERT_START;
}

interface FetchSingleAdvertSuccessAction {
  type: ActionType.FETCH_SINGLE_ADVERT_SUCCESS;
  payload: Adverts;
}

interface FetchSingleAdvertErrorAction {
  type: ActionType.FETCH_SINGLE_ADVERT_ERROR;
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

interface UpdateFavoritesSuccess {
  type: ActionType.UPDATE_FAVORITE_SUCCESS;
  payload: any;
}

interface UpdateFavoritesError {
  type: ActionType.UPDATE_FAVORITE_ERROR;
  payload: string;
}

interface FetchDocumentsStartAction {
  type: ActionType.FETCH_DOCUMENTS_START;
}

interface FetchDocumentsSuccessAction {
  type: ActionType.FETCH_DOCUMENTS_SUCCESS;
  payload: any;
}

interface FetchDocumentsErrorAction {
  type: ActionType.FETCH_DOCUMENTS_ERROR;
  payload: string;
}

interface AddDocumentsStartAction {
  type: ActionType.ADD_DOCUMENTS_START;
}

interface AddDocumentsSuccessAction {
  type: ActionType.ADD_DOCUMENTS_SUCCESS;
  payload: any;
}

interface AddDocumentsErrorAction {
  type: ActionType.ADD_DOCUMENTS_ERROR;
  payload: string;
}

interface DeleteDocumentsStartAction {
  type: ActionType.DELETE_DOCUMENTS_START;
}

interface DeleteDocumentsSuccessAction {
  type: ActionType.DELETE_DOCUMENTS_SUCCESS;
}

interface DeleteDocumentsErrorAction {
  type: ActionType.DELETE_DOCUMENTS_ERROR;
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
  | SetRecommendationAction
  | FetchSingleAdvertStartAction
  | FetchSingleAdvertSuccessAction
  | FetchSingleAdvertErrorAction
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
  | UpdateFavoritesError
  | FetchDocumentsStartAction
  | FetchDocumentsSuccessAction
  | FetchDocumentsErrorAction
  | AddDocumentsStartAction
  | AddDocumentsSuccessAction
  | AddDocumentsErrorAction
  | DeleteDocumentsStartAction
  | DeleteDocumentsSuccessAction
  | DeleteDocumentsErrorAction;
