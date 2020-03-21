import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAuthorList } from "store/selectors/authors";
import { fetchAuthors } from "store/actions/author";
import { Author } from 'models/author';
import { Select } from "antd";

interface Props {
	authorList: Author[];
	onSelect: (email: string) => void;
}

const AuthorSelect: React.FC<Props> = (props) => {
	const { authorList, onSelect } = props;

	const handleChange = useCallback((e) => {
		onSelect(e);
	}, [onSelect]);

	return <Select placeholder="Select author" onChange={handleChange}>
		{authorList?.map((author) => {
			return <Select.Option
				key={author.email}
				value={author.email}>
					{author.firstname} {author.lastname}
			</Select.Option>;
		})}
  </Select>;
};
  
export default AuthorSelect;
  

