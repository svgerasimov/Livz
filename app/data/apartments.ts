import {uid} from '../utility';
import {ImageSourcePropType, ImageURISource} from 'react-native';
import {Apartment} from './types';
import {Cities, districts, subwayStations} from './cities';
import moment from 'moment';
import 'moment/locale/ru';

export const typesOfApartment = ['Жилая', 'Коммерческая'] as const;
export const sortsOfApartment = ['Квартира', 'Студия'] as const;
export const rooms = ['1', '2', '3', '4', '5', '6+'] as const;
export const loggia = ['Нет', '1', '2', '3', '4'] as const;
export const terrace = ['Нет', '1', '2', '3', '4'] as const;
export const bathrooms = ['Нет', '1', '2', '3', '4'] as const;
export const levels = ['1', '2', '3'] as const;
export const modesToSubwayStation = ['Пешком', 'Транспорт'] as const;
export const windowsFace = ['Во двор', 'На улицу'] as const;
export const repair = ['Дизайнерский', 'Свой'] as const;
export const parking = ['Многоуровневая', 'Одноуровневая'] as const;

// export const securitiesOfApartment = [
//   'Газ',
//   'Водоснабжение',
//   'Интернет',
//   'Охрана',
//   'Отделка',
//   'Электричество',
//   'Отопление',
//   'Канализация',
// ] as const;
export enum SecuritiesOfApartment {
  gas = 'газ',
  water = 'водоснабжение',
  internet = 'интернет',
  security = 'охрана',
  finishing = 'отделка',
  electricity = 'электричество',
  heating = 'отопление',
  sanitation = 'канализация',
}

export enum TypesOfApartment {
  Жилая = 'Жилая',
  Коммерческая = 'Коммерческая',
}

export enum SortsOfApartment {
  Квартира = 'Квартира',
  Студия = 'Студия',
}

const photos_1: any[] = [
  require(`../assets/img/apartment_1.jpeg`),
  require(`../assets/img/apartment_2.jpeg`),
  require(`../assets/img/apartment_3.jpeg`),
];
const photos_2: any[] = [
  require(`../assets/img/apartment_2.jpeg`),
  require(`../assets/img/apartment_1.jpeg`),
  require(`../assets/img/apartment_3.jpeg`),
];
const photos_3: any[] = [
  require(`../assets/img/apartment_3.jpeg`),
  require(`../assets/img/apartment_2.jpeg`),
  require(`../assets/img/apartment_1.jpeg`),
];

export const apartments: Apartment[] = [
  {
    id: '1',
    published: moment().format('LL'),
    city: Cities.MSK,
    price: 22000000,
    title: 'Шикарный Таунхаус, 228 м2 на участке 4 сот.',
    developer: 'ЖК ДомИнвест',
    photos: photos_1,
    isFavorite: false,
    district: districts[Cities.MSK][0],
    subwayStation: subwayStations[Cities.MSK][0],
    publicTransportTripDuration: 15,
    address: 'Москва, улица Измайловская, 17',
    totalArea: 58,
    livingArea: 28,
    numberOfRooms: 2,
    floor: 17,
    numberOfFloorsAtBuilding: 25,
    type: 'Жилая',
    sort: 'Квартира',
    gas: true,
    water: true,
    internet: true,
    security: true,
    finishing: true,
    electricity: true,
    heating: true,
    sanitation: true,
    isPremium: true,
    similarAdverts: [],
  },
];

export const premiumApartmentsIds: string[] = ['1', '3'];
