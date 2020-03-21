import { combineReducers } from 'redux'
import books from './books';
import { StoreState } from './types';

export default combineReducers<StoreState>({
	books,
})