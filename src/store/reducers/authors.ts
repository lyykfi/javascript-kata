import { createReducer } from "@reduxjs/toolkit"
import { AuthorsReducer } from "./types";
import { fetchAuthorsSuccess } from '../actions/author';

const INIT_STATE: AuthorsReducer = {
	authorList: null,
}

const authorsReducer = createReducer<AuthorsReducer>(INIT_STATE, {
	[fetchAuthorsSuccess.type]: (state, action) => {
		return {
			...state,
			authorList: action.payload,
		}
	},
})

export default authorsReducer;