import produce, {Draft} from 'immer';
import {Action, ActionType} from '../actions/filterActions';
import {FilterParams} from '../../data/types';

const initialState: FilterParams = {
  type: null,
  sort: null,
  numberOfRooms: null,
  priceFrom: null,
  priceTo: null,
  city: null,
  district: null,
  subwayStation: null,
};

export const reducer = produce((draft: Draft<FilterParams>, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT_TYPE_OF_APARTMENT: {
      draft.type = action.payload;
      break;
    }
    case ActionType.SELECT_SORT_OF_APARTMENT: {
      draft.sort = action.payload;
      break;
    }
    case ActionType.SELECT_NUMBER_OF_ROOMS: {
      draft.numberOfRooms = action.payload;
      break;
    }
    case ActionType.SET_PRICE_FROM: {
      draft.priceFrom = action.payload;
      break;
    }
    case ActionType.SET_PRICE_TO: {
      draft.priceTo = action.payload;
      break;
    }
    case ActionType.SELECT_CITY: {
      draft.city = action.payload;
      break;
    }
    case ActionType.SELECT_SUBWAY_STATION: {
      draft.subwayStation = action.payload;
      break;
    }
    case ActionType.SELECT_DISTRICT: {
      draft.district = action.payload;
      break;
    }
  }
}, initialState);
