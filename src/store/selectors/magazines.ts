import { StoreState } from "store/reducers/types";

export const getMagazineList = (state: StoreState) => {
	return state.magazines.magazineList;
}