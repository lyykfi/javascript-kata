import { createAction, Dispatch } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { Book } from "models/book";
import { authorPrepare } from "utils/sort";

export const fetchBooksSuccess = createAction<Book[]>(
	'FETCH_BOOKS_SUCCESS');

export function fetchBooks() {
	return async (dispatch: Dispatch) => {
		const result = await fetch('/books.csv');
		const content = await result.text();
		const booksRaw = Papa.parse(content, {
			header: true,
			skipEmptyLines: true,
		});

		dispatch(fetchBooksSuccess(authorPrepare(booksRaw.data)));
	};
};