import {Adverts, Filters, FilterParams} from '../data/types';

type FiltersConfig = Record<keyof Filters, (arg: any) => boolean>;

export const createFilters = (params: FilterParams): FiltersConfig => ({
  type: (type) => type === (params.type || type),
  sort: (sort) => sort === (params.sort || sort),
  numberOfRooms: (rooms) => rooms === (params.numberOfRooms || rooms),
  price: (price) =>
    price >= (params.priceFrom || Number.MIN_VALUE) &&
    price <= (params.priceTo || Number.MAX_VALUE),
  city: (city) => city === (params.city || city),
  district: (district) => district === (params.district || district),
  subwayStation: (subwayStation) =>
    subwayStation === (params.subwayStation || subwayStation),
});

export const multiFilter = (adverts: Adverts, filters: FiltersConfig) => {
  const filterKeys = Object.keys(filters) as Array<keyof FiltersConfig>;
  const advertsKeys = Object.keys(adverts) as Array<string>;
  return advertsKeys
    .filter((advertKey) => {
      return filterKeys.every((filterKey) => {
        return filters[filterKey](adverts[advertKey][filterKey]);
      });
    })
    .reduce((res, key) => ((res[key] = adverts[key]), res), <Adverts>{});
};
