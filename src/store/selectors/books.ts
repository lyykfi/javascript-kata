import { StoreState } from "store/reducers/types";

export const getBookList = (state: StoreState) => {
	return state.books.booksList;
}