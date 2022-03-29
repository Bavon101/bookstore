import { combineReducers, createStore } from 'react-redux';
import * as bookReducer from './books/books';
import * as categoriesReducer from './categories/categories';

const rootReducer = combineReducers(
  {
    ...bookReducer,
    ...categoriesReducer,
  },
);

const store = createStore(rootReducer);

export default store;
