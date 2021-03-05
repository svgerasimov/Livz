import {createSelector} from 'reselect';
import {RootState} from '../reducers';

const getAdverts = (state: RootState) => state.advertisements.data;

export const premiumAdvertsIdsSelector = createSelector(
  getAdverts,
  (adverts) => {
    return Object.keys(adverts).filter(
      (advertId) => !!adverts[advertId].isPremium,
    );
  },
);

export const favoriteIdsSelector = createSelector(getAdverts, (adverts) => {
  return Object.keys(adverts).filter(
    (advertId) => !!adverts[advertId].isFavorite,
  );
});
