import { createReducer } from "@reduxjs/toolkit"
import { BooksReducer } from "./types";
import { fetchBooksSuccess } from "store/actions/books";

const INIT_STATE: BooksReducer = {
	booksList: null,
}

const booksReducer = createReducer<BooksReducer>(INIT_STATE, {
	[fetchBooksSuccess.type]: (state, action) => {
		return {
			...state,
			booksList: action.payload,
		}
	}
})

export default booksReducer;