import {combineReducers} from 'redux';
import {reducer as advertsReducer} from './advertsReducer';
import {reducer as filterReducer} from './filterReducer';
import {reducer as authReducer} from './authReducer';
import {reducer as newsReducer} from './newsReducer';
import {reducer as userReducer} from './userReducer';
import {reducer as metroReducer} from './metroReducers';

export const reducers = combineReducers({
  advertisements: advertsReducer,
  filter: filterReducer,
  auth: authReducer,
  news: newsReducer,
  user: userReducer,
  metro: metroReducer,
});

export type RootState = ReturnType<typeof reducers>;
