import {createStore, applyMiddleware, Middleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducers} from './reducers';

const middlewares: Middleware[] = [thunk];

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares)),
);
