import React from "react";
import { Typography, Card, Tag } from 'antd';
import { Book } from "models/book";

interface Props {
	name: string;
	sirname: string;
}

const Author: React.FC<Props> = (props) => {
	const { name, sirname } = props;

	return <>
		<span>{name} </span>

		<span>{sirname}</span>
	</>;
};
  
export default Author;
  