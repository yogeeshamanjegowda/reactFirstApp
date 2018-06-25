import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer.js';

const store = createStore(
  combineReducers({
    news: newsReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store