import {combineReducers} from 'redux';
import {reducer as advertsReducer} from './advertsReducer';
import {reducer as filterReducer} from './filterReducer';
import {reducer as authReducer} from './authReducer';

export const reducers = combineReducers({
  advertisements: advertsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducers>;
