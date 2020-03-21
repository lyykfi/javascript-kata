import { createReducer } from "@reduxjs/toolkit"
import { BooksReducer } from "./types";
import { fetchBooksSuccess } from "store/actions/books";
import { findByISBN } from "store/actions/find";

const INIT_STATE: BooksReducer = {
	booksList: null,
	allBooks: null,
}

const booksReducer = createReducer<BooksReducer>(INIT_STATE, {
	[fetchBooksSuccess.type]: (state, action) => {
		return {
			...state,
			booksList: action.payload,
			allBooks: action.payload,
		}
	},
	[findByISBN.type]: (state, action) => {
		const isbn = action.payload;
		console.log(state.allBooks);
		const booksList = state.allBooks?.filter((book) => {
			return book.isbn?.includes(isbn);
		});
		 console.log(booksList);
		return {
			...state,
			booksList: booksList,
		}
	},
})

export default booksReducer;