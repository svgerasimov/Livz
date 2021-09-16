import {createSelector} from 'reselect';
import {RootState} from '../reducers';

const getAdverts = (state: RootState) => state.advertisements.data;
export const getFavorites = (state: RootState) => state.advertisements.favorite;

export const premiumAdvertsIdsSelector = createSelector(
  getAdverts,
  (adverts) => {
    return Object.keys(adverts).filter(
      (advertId) => !!adverts[advertId].isPremium,
    );
  },
);

export const favoriteIdsSelector = createSelector(getFavorites, (adverts) => {
  return adverts.map((el) => (el = el.id));
});
