import {ImageSourcePropType, ImageURISource} from 'react-native';
import {Cities} from '../data/cities';
import {
  typesOfApartment,
  sortsOfApartment,
  rooms,
  modesToSubwayStation,
  windowsFace,
  bathrooms,
} from '../data/apartments';
import {uid} from '../utility';
import moment from 'moment';
import 'moment/locale/ru';

export type TypeOfApartment = typeof typesOfApartment[number];
export type SortOfApartment = typeof sortsOfApartment[number];
export type anyOfRooms = typeof rooms[number];
export type ModeToSubwayStation = typeof modesToSubwayStation[number];

export type Apartment = {
  id: any;
  published: any;

  city?: any;
  type?: any;
  sort?: any;
  address: any;
  subwayStation?: any;
  numberOfRooms?: any;
  totalArea?: any;
  livingArea?: any;
  floor?: any;
  numberOfFloorsAtBuilding?: any;
  photos: any[];
  title?: any;
  price?: any;
  logia?: any;
  levels?: any;
  terrace?: any;
  separateBathrooms?: any;
  joinedBathrooms?: any;
  repair?: any;
  parking?: any;
  modeToSubwayStation?: any;
  timeToSubwayStation?: any;
  description?: any;
  areaOfRooms?: any;
  phone?: any;
  windowsFace?: any;
  consideringExchange?: any;
  participatingInAuction?: any;
  bargaining?: any;
  developer: any;
  isFavorite: any;
  district?: any;
  publicTransportTripDuration?: any;
  gas: any;
  water: any;
  internet: any;
  security: any;
  finishing: any;
  electricity: any;
  heating: any;
  sanitation: any;
  isPremium: any;
  similarAdverts: any[];
};

export type Adverts = {
  [key in Apartment['id']]: Apartment;
};

export type FilterParams = {
  type: any;
  sort: any;
  anyOfRooms: any;
  priceFrom: any;
  priceTo: any;
  city: any;
  subwayStation: any;
  district: any;
};

export type Filters = Omit<
  FilterParams & {price: any},
  'priceFrom' | 'priceTo'
>;
