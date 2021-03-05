import {ActionType, Action} from '../actions/filterActions';
import {AdvertsState} from '../reducers/advertsReducer';
import {apartments} from '../../data/apartments';
import {delay, transformArrayOfObjectsToSingleObject} from '../../utility';
import {Apartment} from '../../data/types';
import {TypeOfApartment, SortOfApartment} from '../../data/types';
import {Cities} from '../../data/cities';

export const selectTypeOfApartment = (value: TypeOfApartment): Action => ({
  type: ActionType.SELECT_TYPE_OF_APARTMENT,
  payload: value,
});

export const selectSortOfApartment = (value: SortOfApartment): Action => ({
  type: ActionType.SELECT_SORT_OF_APARTMENT,
  payload: value,
});

export const selectNumberOfRooms = (value: number) => ({
  type: ActionType.SELECT_NUMBER_OF_ROOMS,
  payload: value,
});

export const setPriceFrom = (value: number) => ({
  type: ActionType.SET_PRICE_FROM,
  payload: value,
});

export const setPriceTo = (value: number) => ({
  type: ActionType.SET_PRICE_TO,
  payload: value,
});

export const selectCity = (value: Cities) => ({
  type: ActionType.SELECT_CITY,
  payload: value,
});

export const selectSubwayStation = (value: string) => ({
  type: ActionType.SELECT_SUBWAY_STATION,
  payload: value,
});

export const selectDistrict = (value: string) => ({
  type: ActionType.SELECT_DISTRICT,
  payload: value,
});
