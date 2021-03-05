import {typesOfApartment, sortsOfApartment, rooms} from './apartments';
import {
  Cities,
  allDistricts,
  districts,
  allSubwayStations,
  subwayStations,
} from './cities';

export function getDistricts(city: Cities | null) {
  return city === null ? allDistricts : districts[city];
}

export function getSubwayStations(city: Cities | null) {
  return city === null ? allSubwayStations : subwayStations[city];
}

export function getCities() {
  return Object.values(Cities);
}
