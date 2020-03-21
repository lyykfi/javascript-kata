import { createAction, Dispatch } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { Magazine } from "models/magazine";

export const fetchMagazineSuccess = createAction<Magazine[]>(
	'FETCH_MAGAZINE_SUCCESS');

export function fetchMagazines() {
	return async (dispatch: Dispatch) => {
		const result = await fetch('/magazines.csv');
		const content = await result.text();
		const magazines = Papa.parse(content, {
			header: true,
		});

		dispatch(fetchMagazineSuccess(magazines.data));
	};
};