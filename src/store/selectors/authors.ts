import { StoreState } from "store/reducers/types";

export const getAuthorList = (state: StoreState) => {
	return state.authors.authorList;
}