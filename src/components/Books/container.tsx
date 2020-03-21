import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "store/selectors/books";
import { fetchBooks } from "store/actions/books";
import Books from ".";
import { Spin } from "antd";

const BooksContainer = () => {
	const dispatch = useDispatch();
	const bookList = useSelector(getBookList);

	useEffect(() => {
		if (!bookList) {
			dispatch(fetchBooks());
		}
	}, [bookList]);

	return bookList ? <Books bookList={bookList} /> : <Spin size="large" />;
};
  
export default BooksContainer;
  