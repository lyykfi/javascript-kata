import { createAction, Dispatch } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { Author } from "models/author";

export const fetchAuthorsSuccess = createAction<Author[]>(
	'FETCH_BOOKS_AUTHORS');

export const findByAuthor = createAction<Author>(
	'FIND_BY_AUTHOR');

export function fetchAuthors() {
	return async (dispatch: Dispatch) => {
		const result = await fetch('/authors.csv');
		const content = await result.text();
		const authorsRaw = Papa.parse(content, {
			header: true,
			skipEmptyLines: true,
		});

		dispatch(fetchAuthorsSuccess(authorsRaw.data));
	};
};