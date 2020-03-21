import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAuthorList } from "store/selectors/authors";
import { fetchAuthors, findByAuthor } from "store/actions/author";
import AuthorSelect from ".";

const AuthorSelectContainer = () => {
	const dispatch = useDispatch();
	const authorList = useSelector(getAuthorList);

	const onSelect = useCallback((value) => {
		dispatch(findByAuthor(value));
	}, []);

	useEffect(() => {
		if (!authorList) {
			dispatch(fetchAuthors());
		}
	}, [authorList]);

	return <AuthorSelect
		authorList={authorList}
		onSelect={onSelect}
		/>;
};
  
export default AuthorSelectContainer;
  