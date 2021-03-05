import {TypeOfApartment, SortOfApartment} from '../../data/types';
import {Cities} from '../../data/cities';

export enum ActionType {
  SELECT_TYPE_OF_APARTMENT = 'SELECT_TYPE_OF_APARTMENT',
  SELECT_SORT_OF_APARTMENT = 'SELECT_SORT_OF_APARTMENT',
  SELECT_NUMBER_OF_ROOMS = 'SELECT_NUMBER_OF_ROOMS',
  SELECT_CITY = 'SELECT_CITY',
  SELECT_SUBWAY_STATION = 'SELECT_SUBWAY_STATION',
  SELECT_DISTRICT = 'SELECT_DISTRICT',
  SET_PRICE_FROM = 'SET_PRICE_FROM',
  SET_PRICE_TO = 'SET_PRICE_TO',
}

export type SelectTypeOfApartmentAction = {
  type: ActionType.SELECT_TYPE_OF_APARTMENT;
  payload: TypeOfApartment;
};
export type SelectSortOfApartmentAction = {
  type: ActionType.SELECT_SORT_OF_APARTMENT;
  payload: SortOfApartment;
};
export type SelectNumberOfRoomsAction = {
  type: ActionType.SELECT_NUMBER_OF_ROOMS;
  payload: number;
};
export type SelectCityAction = {
  type: ActionType.SELECT_CITY;
  payload: Cities;
};
export type SelectSubwayStationAction = {
  type: ActionType.SELECT_SUBWAY_STATION;
  payload: string;
};
export type SelectDistrictAction = {
  type: ActionType.SELECT_DISTRICT;
  payload: string;
};

export type SetPriceFromAction = {
  type: ActionType.SET_PRICE_FROM;
  payload: number;
};

export type SetPriceToAction = {
  type: ActionType.SET_PRICE_TO;
  payload: number;
};

export type Action =
  | SelectTypeOfApartmentAction
  | SelectSortOfApartmentAction
  | SelectNumberOfRoomsAction
  | SelectCityAction
  | SelectSubwayStationAction
  | SelectDistrictAction
  | SetPriceFromAction
  | SetPriceToAction;
