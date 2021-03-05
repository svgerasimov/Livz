import {mskDistricts, MskDistricts, mskSubwayStations} from './moscow';
import {
  spbDistricts,
  SpbDistricts,
  spbSubwayStations,
} from './saint-petersburg';

export enum Cities {
  MSK = 'Москва',
  SPB = 'Санкт-Петербург',
}

export const districts = {
  [Cities.MSK]: mskDistricts,
  [Cities.SPB]: spbDistricts,
};
export const allDistricts = [...mskDistricts, ...spbDistricts];

export const subwayStations = {
  [Cities.MSK]: mskSubwayStations,
  [Cities.SPB]: spbSubwayStations,
};

export const allSubwayStations = [...mskSubwayStations, ...spbSubwayStations];

// export const subwayStations = {
//   [Cities.MSK]: mskDistricts,
//   [Cities.SPB]: spbDistricts,
// }

// export const Subways = {
//   [Cities.Moscow]: {
//     all: MoscowSubwayStations,
//     byDistricts: {
//       [MoscowDistricts.Арбат]: [
//         MoscowSubwayStations.Арбатская,
//         MoscowSubwayStations.Боровицкая,
//         MoscowSubwayStations.Смоленская,
//       ],
//       [MoscowDistricts.Бибирево]: [
//         MoscowSubwayStations.Бибирево,
//         MoscowSubwayStations.Алтуфьево,
//       ],
//       [MoscowDistricts.Измайлово]: [
//         MoscowSubwayStations.Измайловская,
//         MoscowSubwayStations.Партизанская,
//         MoscowSubwayStations.Первомайская,
//       ],
//       [MoscowDistricts.Тверской]: [
//         MoscowSubwayStations.Белорусская,
//         MoscowSubwayStations.Достоевская,
//         MoscowSubwayStations.Лубянка,
//         MoscowSubwayStations.Маяковская,
//       ],
//     },
//   },
//   [Cities.SaintPetersburg]: {
//     all: SpbSabwayStations,
//     byDistricts: {
//       [SainPetersburgDistricts.Центральный]: [SpbSabwayStations.Академическая],
//       [SainPetersburgDistricts.Выборгский]: [SpbSabwayStations.Политехническая],
//     },
//   },
// };
