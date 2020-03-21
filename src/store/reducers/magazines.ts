import { createReducer } from "@reduxjs/toolkit"
import { MagazinesReducer } from "./types";
import { fetchMagazineSuccess } from "store/actions/magazines";
import { findByISBN } from "store/actions/find";
import { sortByTitle, findItems } from "utils/sort";
import { findByAuthor } from "store/actions/author";

const INIT_STATE: MagazinesReducer = {
	magazineList: null,
	allMagazines: null,
	authorEmail: null,
	ISBN: null,
}

const magazinesReducer = createReducer<MagazinesReducer>(INIT_STATE, {
	[fetchMagazineSuccess.type]: (state, action) => {
		return {
			...state,
			magazineList: action.payload.sort(sortByTitle),
			allMagazines: action.payload,
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
				newState.allMagazines,
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
				newState.allMagazines,
				newState.ISBN,
				newState.authorEmail),
		}
	},
})

export default magazinesReducer;