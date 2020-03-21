import { createAction } from "@reduxjs/toolkit";

export const findByISBN = createAction<string>(
	'FIND_BY_ISBN');