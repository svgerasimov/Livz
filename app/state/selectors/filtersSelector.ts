import {createSelector} from 'reselect';
import {RootState} from '../reducers';
import {createFilters, multiFilter} from '../../utility/filters';
import {isEmpty} from 'lodash';

const getFilterParams = (state: RootState) => state.filter;
export const getAdverts = (state: RootState) => state.advertisements.data;
const getCity = (state: RootState) => state.filter.city;

export const filtersSelector = createSelector(
  getFilterParams,
  (filterParams) => {
    return createFilters(filterParams);
  },
);

export const getFilteredAdverts = createSelector(
  [filtersSelector, getAdverts],
  (filters, adverts) => {
    // console.log('adverts', adverts);
    return !isEmpty(adverts) ? multiFilter(adverts as any, filters) : {};
  },
);
