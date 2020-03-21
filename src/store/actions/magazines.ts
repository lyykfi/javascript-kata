import { createAction, Dispatch } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { Magazine } from "models/magazine";
import { authorPrepare } from "utils/sort";

export const fetchMagazineSuccess = createAction<Magazine[]>(
	'FETCH_MAGAZINE_SUCCESS');

export function fetchMagazines() {
	return async (dispatch: Dispatch) => {
		const result = await fetch('/magazines.csv');
		const content = await result.text();
		const magazines = Papa.parse(content, {
			header: true,
			skipEmptyLines: true,
		});

		dispatch(fetchMagazineSuccess(authorPrepare(magazines.data)));
	};
};