import React from "react";
import { useSelector } from "react-redux";
import { getAuthorList } from "store/selectors/authors";
import Author from ".";

interface Props {
	email: string;
}

const AuthorContainer: React.FC<Props> = (props) => {
	const { email } = props;
	const authorList = useSelector(getAuthorList);
	const author = authorList?.find((item) => item.email === email);

	return author ? <Author name={author.firstname} sirname={author.lastname} /> : <></>;
};
  
export default AuthorContainer;
  