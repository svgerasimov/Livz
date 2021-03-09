import {combineReducers} from 'redux';
import {reducer as advertsReducer} from './advertsReducer';
import {reducer as filterReducer} from './filterReducer';
import {reducer as authReducer} from './authReducer';
import {reducer as userReducer} from './userReducer';

export const reducers = combineReducers({
  advertisements: advertsReducer,
  filter: filterReducer,
  auth: authReducer,

  user: userReducer
});

export type RootState = ReturnType<typeof reducers>;
