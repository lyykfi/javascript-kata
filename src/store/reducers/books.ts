import { createReducer } from "@reduxjs/toolkit"
import { BooksReducer } from "./types";

const INIT_STATE: BooksReducer = {
	booksList: null,
}

const booksReducer = createReducer<BooksReducer>(INIT_STATE, {
	[fetchBooksSuccess.type]: (state, action) => {
		
	}
})

export default booksReducer;