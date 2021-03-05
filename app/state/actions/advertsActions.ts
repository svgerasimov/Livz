import {Apartment, Adverts} from '../../data/types';

export enum ActionType {
  FETCH_ADVERTS_START = 'fetch_adverts_start',
  FETCH_ADVERTS_SUCCESS = 'fetch_adverts_success',
  FETCH_ADVERTS_ERROR = 'fetch_adverts_error',
  LIKE_ADVERT = 'like_advert',
  UNLIKE_ADVERT = 'unlike_advert',
  ADD_ADVERT = 'add_advert',
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

export type AdvertsAction =
  | FetchAdvertsStartAction
  | FetchAdvertsSuccessAction
  | FetchAdvertsErrorAction
  | LikeAdvertAction
  | UnlikeAdvertAction
  | AddAdvertAction;
