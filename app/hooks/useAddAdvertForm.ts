import React, {useReducer} from 'react';
import produce, {Draft} from 'immer';
import {
  typesOfApartment,
  sortsOfApartment,
  modesToSubwayStation,
  windowsFace,
  bathrooms,
} from '../data/apartments';
import {
  Apartment,
  NumberOfRooms,
  TypeOfApartment,
  SortOfApartment,
  ModeToSubwayStation,
} from '../data/types';
import {Cities} from '../data/cities';
import {uid} from '../utility';
import moment from 'moment';
import 'moment/locale/ru';

// export type AddAdvertStateType = {
//   id: string;
//   published: string;
//   type?: TypeOfApartment;
//   sort?: SortOfApartment;
//   address?: string;
//   city?: Cities;
//   subwayStation?: string;
//   timeToSubwayStation?: string;
//   modeToSubwayStation?: ModeToSubwayStation;
//   numberOfRooms?: NumberOfRooms;
//   totalArea?: string;
//   livingArea?: string;
//   areaOfRooms?: string;
//   floor?: string;
//   numberOfFloorsAtBuilding?: string;
//   logia?: string;
//   levels?: string;
//   terrace?: string;
//   separateBathrooms?: string;
//   joinedBathrooms?: string;
//   repair?: string;
//   parking?: string;
//   photos: string[];
//   title?: string;
//   description?: string;
//   price?: string;
//   phone?: string;
//   windowsFace?: typeof windowsFace[number] | undefined;
//   consideringExchange?: boolean;
//   participatingInAuction?: boolean;
//   bargaining?: boolean;
// };

const initialState: Apartment = {
  id: uid(),
  published: moment().format('LL'),
  type: undefined,
  sort: undefined,
  address: undefined,
  city: undefined,
  subwayStation: undefined,
  timeToSubwayStation: undefined,
  modeToSubwayStation: undefined,
  numberOfRooms: undefined,
  totalArea: undefined,
  livingArea: undefined,
  floor: undefined,
  numberOfFloorsAtBuilding: undefined,
  areaOfRooms: undefined,
  logia: undefined,
  levels: undefined,
  terrace: undefined,
  separateBathrooms: undefined,
  joinedBathrooms: undefined,
  repair: undefined,
  parking: undefined,
  photos: [],
  title: undefined,
  description: undefined,
  price: undefined,
  phone: undefined,
  windowsFace: undefined,
  consideringExchange: false,
  participatingInAuction: false,
  bargaining: false,
  developer: 'ЖК Выбор',
  isFavorite: false,
  district: undefined,
  publicTransportTripDuration: undefined,
  gas: false,
  water: false,
  internet: false,
  security: false,
  finishing: false,
  electricity: false,
  heating: false,
  sanitation: false,
  isPremium: false,
  similarAdverts: [],
};

export enum ActionType {
  SELECT_TYPE_OF_APARTMENT = 'select_type_of_apartment',
  SELECT_SORT_OF_APARTMENT = 'select_sort_of_apartment',
  SELECT_CITY = 'select_city',
  SET_ADDRESS_OF_APARTMENT = 'set_address_of_apartment',
  SET_CONSIDERING_EXCHANGE = 'SET_CONSIDERING_EXCHANGE',
  SET_PARTICIPATING_IN_AUCHION = 'SET_PARTICIPATING_IN_AUCHION',
  SET_BARGAINING = 'SET_BARGAINING',
  SET_TIME_TO_SUBWAY = 'set_time_to_subway',
  SET_MODE_TO_SUBWAY = 'set_mode_to_subway',
  SELECT_SUBWAY_STATION = 'select_subway_station',
  SELECT_NUMBER_OF_ROOMS = 'select_number_of_rooms',
  SELECT_REPAIR = 'select_repair',
  SELECT_PARKING = 'select_parking',
  SELECT_PHOTO = 'select_photo',
  SELECT_WINDOWS_FACE = 'select_windows_face',
  SET_TOTAL_AREA = 'set_total_area',
  SET_LIVING_AREA = 'set_living_area',
  SET_AREA_OF_ROOMS = 'set_area_area_of_rooms',
  SET_FLOOR = 'set_total_floor',
  SET_LOGIA = 'set_logia',
  SET_LEVELS = 'set_levels',
  SET_TERACE = 'set_terrace',
  SET_SEPARATE_BATHROOMS = 'set_separate_bathrooms',
  SET_JOINED_BATHROOMS = 'set_joined_bathrooms',
  SET_NUMBER_OF_FLOORS_AT_BUILDING = 'set_numbers_of_floors_at_building',
  SET_TITLE = 'set_title',
  SET_DESCRIPTION = 'set_description',
  SET_PRICE = 'set_price',
  SET_PHONE = 'set_phone',
  RESET_FORM = 'reset_form',
}

type SetTitleAction = {
  type: ActionType.SET_TITLE;
  payload: any;
};
type SetExchangeAction = {
  type: ActionType.SET_CONSIDERING_EXCHANGE;
  payload: any;
};
type SetAuchionAction = {
  type: ActionType.SET_PARTICIPATING_IN_AUCHION;
  payload: any;
};
type SetBargainingAction = {
  type: ActionType.SET_BARGAINING;
  payload: any;
};
type SetPriceAction = {
  type: ActionType.SET_PRICE;
  payload: any;
};
type SetPhoneAction = {
  type: ActionType.SET_PHONE;
  payload: any;
};
type SetDescriptionAction = {
  type: ActionType.SET_DESCRIPTION;
  payload: any;
};
type SelectTypeOfApartmentAction = {
  type: ActionType.SELECT_TYPE_OF_APARTMENT;
  payload: any;
};
type SelectSortOfApartmentAction = {
  type: ActionType.SELECT_SORT_OF_APARTMENT;
  payload: any;
};
type SetAddressOfApartmentAction = {
  type: ActionType.SET_ADDRESS_OF_APARTMENT;
  payload: any;
};
type SelectCityAction = {
  type: ActionType.SELECT_CITY;
  payload: any;
};
type SelectParkingAction = {
  type: ActionType.SELECT_PARKING;
  payload: any;
};
type SelectPhotoAction = {
  type: ActionType.SELECT_PHOTO;
  payload: any;
};
type SelectSubwayStationAction = {
  type: ActionType.SELECT_SUBWAY_STATION;
  payload: any;
};
type SelectWindowsFaceAction = {
  type: ActionType.SELECT_WINDOWS_FACE;
  payload: any;
};
type SetTimeToSubway = {
  type: ActionType.SET_TIME_TO_SUBWAY;
  payload: any;
};
type SetModeToSubway = {
  type: ActionType.SET_MODE_TO_SUBWAY;
  payload: any;
};
type SetTotalArea = {
  type: ActionType.SET_TOTAL_AREA;
  payload: any;
};
type SetLivingArea = {
  type: ActionType.SET_LIVING_AREA;
  payload: any;
};
type SetAreaOfRooms = {
  type: ActionType.SET_AREA_OF_ROOMS;
  payload: any;
};
type SetSeparateBathrooms = {
  type: ActionType.SET_SEPARATE_BATHROOMS;
  payload: any;
};
type SetJoinedBathrooms = {
  type: ActionType.SET_JOINED_BATHROOMS;
  payload: any;
};

type SelectNumberOfRoomsAction = {
  type: ActionType.SELECT_NUMBER_OF_ROOMS;
  payload: any;
};
type SelectRepairAction = {
  type: ActionType.SELECT_REPAIR;
  payload: any;
};
type SetFloorAction = {
  type: ActionType.SET_FLOOR;
  payload: any;
};
type SetLogiaAction = {
  type: ActionType.SET_LOGIA;
  payload: any;
};
type SetLevelsAction = {
  type: ActionType.SET_LEVELS;
  payload: any;
};
type SetTeraceAction = {
  type: ActionType.SET_TERACE;
  payload: any;
};
type SetNumberOfFloorsAtBuildingAction = {
  type: ActionType.SET_NUMBER_OF_FLOORS_AT_BUILDING;
  payload: any;
};
type ResetFormAction = {
  type: ActionType.RESET_FORM;
};

type Action =
  | SelectTypeOfApartmentAction
  | SelectSortOfApartmentAction
  | SetAddressOfApartmentAction
  | SelectCityAction
  | SelectSubwayStationAction
  | SetTimeToSubway
  | SetModeToSubway
  | SelectNumberOfRoomsAction
  | SetTotalArea
  | SetFloorAction
  | SetNumberOfFloorsAtBuildingAction
  | SetAreaOfRooms
  | SetLivingArea
  | SetLogiaAction
  | SetLevelsAction
  | SetTeraceAction
  | SetSeparateBathrooms
  | SetJoinedBathrooms
  | SelectRepairAction
  | SelectParkingAction
  | SelectPhotoAction
  | SetTitleAction
  | SetDescriptionAction
  | SetPriceAction
  | SetPhoneAction
  | SelectWindowsFaceAction
  | SetExchangeAction
  | SetAuchionAction
  | SetBargainingAction
  | ResetFormAction;

const reducer = produce((draft: Draft<Apartment>, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PRICE: {
      draft.price = action.payload;
      break;
    }
    case ActionType.SET_TITLE: {
      draft.title = action.payload;
      break;
    }
    case ActionType.SET_DESCRIPTION: {
      draft.description = action.payload;
      break;
    }
    case ActionType.SELECT_TYPE_OF_APARTMENT: {
      draft.type = action.payload;
      break;
    }
    case ActionType.SELECT_SORT_OF_APARTMENT: {
      draft.sort = action.payload;
      break;
    }
    case ActionType.SELECT_PARKING: {
      draft.parking = action.payload;
      break;
    }
    case ActionType.SET_ADDRESS_OF_APARTMENT: {
      draft.address = action.payload;
      break;
    }
    case ActionType.SELECT_CITY: {
      draft.city = action.payload;
      break;
    }
    case ActionType.SET_PHONE: {
      draft.phone = action.payload;
      break;
    }
    case ActionType.SELECT_SUBWAY_STATION: {
      draft.subwayStation = action.payload;
      break;
    }
    case ActionType.SET_TIME_TO_SUBWAY: {
      draft.timeToSubwayStation = action.payload;
      break;
    }
    case ActionType.SET_MODE_TO_SUBWAY: {
      draft.modeToSubwayStation = action.payload;
      break;
    }
    case ActionType.SELECT_NUMBER_OF_ROOMS: {
      draft.numberOfRooms = action.payload;
      break;
    }
    case ActionType.SELECT_PHOTO: {
      draft.photos.push(action.payload);
      break;
    }
    case ActionType.SET_TOTAL_AREA: {
      draft.totalArea = action.payload;
      break;
    }
    case ActionType.SET_LIVING_AREA: {
      draft.livingArea = action.payload;
      break;
    }
    case ActionType.SELECT_REPAIR: {
      draft.repair = action.payload;
      break;
    }

    case ActionType.SET_LEVELS: {
      draft.levels = action.payload;
      break;
    }
    case ActionType.SET_FLOOR: {
      draft.floor = action.payload;
      break;
    }
    case ActionType.SET_LOGIA: {
      draft.logia = action.payload;
      break;
    }
    case ActionType.SET_TERACE: {
      draft.terrace = action.payload;
      break;
    }
    case ActionType.SET_SEPARATE_BATHROOMS: {
      draft.separateBathrooms = action.payload;
      break;
    }
    case ActionType.SET_JOINED_BATHROOMS: {
      draft.joinedBathrooms = action.payload;
      break;
    }
    case ActionType.SET_NUMBER_OF_FLOORS_AT_BUILDING: {
      draft.numberOfFloorsAtBuilding = action.payload;
      break;
    }
    case ActionType.SET_AREA_OF_ROOMS: {
      draft.areaOfRooms = action.payload;
      break;
    }
    case ActionType.SET_CONSIDERING_EXCHANGE: {
      draft.consideringExchange = action.payload;
      break;
    }
    case ActionType.SET_PARTICIPATING_IN_AUCHION: {
      draft.participatingInAuction = action.payload;
      break;
    }
    case ActionType.SET_BARGAINING: {
      draft.bargaining = action.payload;
      break;
    }
    case ActionType.SELECT_WINDOWS_FACE: {
      draft.windowsFace = action.payload;
      break;
    }
    case ActionType.RESET_FORM: {
      draft = initialState;
      break;
    }
  }
}, initialState);

export const useAddAdvertForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    console.log('state form', state);
  }, [state]);
  return {
    state,
    dispatch,
  };
};
