import { createReducer } from "@reduxjs/toolkit"
import { MagazinesReducer } from "./types";
import { fetchMagazineSuccess } from "store/actions/magazines";

const INIT_STATE: MagazinesReducer = {
	magazineList: null,
}

const magazinesReducer = createReducer<MagazinesReducer>(INIT_STATE, {
	[fetchMagazineSuccess.type]: (state, action) => {
		return {
			...state,
			magazineList: action.payload,
		}
	}
})

export default magazinesReducer;