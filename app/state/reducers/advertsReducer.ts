import produce, {Draft, finishDraft} from 'immer';
import {AdvertsAction, ActionType} from '../actions/advertsActions';
import {Adverts, Apartment} from '../../data/types';

export interface AdvertsState {
  loading: boolean;
  error: string | null;
  data: Adverts;
  accountType: string;
  categories: any;
  attributes: any;
  favorite: any;
}

const initialState: AdvertsState = {
  loading: false,
  error: null,
  data: {},
  accountType: 'Собственник',
  categories: [],
  attributes: [],
  favorite: [],
};

export const reducer = produce(
  (draft: Draft<AdvertsState>, action: AdvertsAction) => {
    switch (action.type) {
      case ActionType.FETCH_ADVERTS_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_ADVERTS_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
        break;
      }
      case ActionType.FETCH_ADVERTS_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case ActionType.FETCH_CATEGORIES_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_CATEGORIES_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.categories = action.payload;
        break;
      }
      case ActionType.FETCH_CATEGORIES_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case ActionType.FETCH_ATTRIBUTES_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_ATTRIBUTES_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.attributes = action.payload;
        break;
      }
      case ActionType.FETCH_ATTRIBUTES_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case ActionType.FETCH_FAVORITE_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_FAVORITE_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.attributes = action.payload;
        break;
      }
      case ActionType.FETCH_FAVORITE_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case ActionType.UPDATE_FAVORITE_START: {
        draft.loading = true;
        break;
      }
      case ActionType.UPDATE_FAVORITE_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.attributes = action.payload;
        break;
      }
      case ActionType.UPDATE_FAVORITE_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case ActionType.LIKE_ADVERT: {
        draft.data[action.payload].isFavorite = true;
        break;
      }
      case ActionType.UNLIKE_ADVERT: {
        draft.data[action.payload].isFavorite = false;
        break;
      }
      case ActionType.ADD_ADVERT: {
        draft.data[action.payload.id] = action.payload;
        break;
      }
      case ActionType.ADD_ADVERT: {
        draft.data[action.payload.id] = action.payload;
        break;
      }
      case ActionType.UPDATE_ACCOUNT_TYPE: {
        draft.accountType = action.payload;
        break;
      }
    }
  },
  initialState,
);
