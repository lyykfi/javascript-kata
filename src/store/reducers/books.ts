import { createReducer } from "@reduxjs/toolkit"
import { BooksReducer } from "./types";
import { fetchBooksSuccess } from "store/actions/books";
import { findByISBN } from "store/actions/find";
import { sortByTitle, findItems } from "utils/sort";
import { findByAuthor } from "store/actions/author";

const INIT_STATE: BooksReducer = {
	booksList: null,
	allBooks: null,
	authorEmail: null,
	ISBN: null,
}

const booksReducer = createReducer<BooksReducer>(INIT_STATE, {
	[fetchBooksSuccess.type]: (state, action) => {
		return {
			...state,
			booksList: action.payload.sort(sortByTitle),
			allBooks: action.payload,
		}
	},
	[findByAuthor.type]: (state, action) => {
		const newState = {
			...state,
			authorEmail: action.payload,
		}

		return {
			...newState,
			booksList: findItems(
				newState.allBooks,
				newState.ISBN,
				newState.authorEmail),
		}
	},
	[findByISBN.type]: (state, action) => {
		const newState = {
			...state,
			ISBN: action.payload,
		}

		return {
			...newState,
			booksList: findItems(
				newState.allBooks,
				newState.ISBN,
				newState.authorEmail),
		}
	},
})

export default booksReducer;