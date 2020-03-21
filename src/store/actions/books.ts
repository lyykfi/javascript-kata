import { createAction, Dispatch } from "@reduxjs/toolkit";
import Papa from "papaparse";

export const fetchBooksSuccess = createAction('FETCH_BOOKS_SUCCESS');

export function fetchBooks() {
	return async (dispatch: Dispatch) => {
		const result = await fetch('/books.csv');
		const content = await result.text();
		const books = Papa.parse(content, {
			header: true,
		});

		dispatch(fetchBooksSuccess(books.data));
	};
};