import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "store/selectors/books";
import { fetchBooks } from "store/actions/books";

const BooksContainer = () => {
	const dispatch = useDispatch();
	const bookList = useSelector(getBookList);

	useEffect(() => {
		if (!bookList) {
			dispatch(fetchBooks());
		}
	}, [bookList]);
	return <div>BooksContainer</div>;
};
  
export default BooksContainer;
  