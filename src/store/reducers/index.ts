import { combineReducers } from 'redux'
import books from './books';
import magazines from './magazines';
import { StoreState } from './types';

export default combineReducers<StoreState>({
	books,
	magazines,
})