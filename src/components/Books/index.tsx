import React from "react";
import { Typography, Card } from 'antd';
import { Book } from "models/book";

interface Props {
	bookList: Book[];
}

const Books: React.FC<Props> = (props) => {
	const { bookList } = props;

	return <>
		<Typography.Title level={2}>Books</Typography.Title>
		
		<>
			{(bookList ?? []).map((book, index) => {
				return <Card
					key={index}
					title={book.title}>

					<Typography.Title level={3}>
						{book.authors}
					</Typography.Title>
					{book.description}
					<p>
						{book.isbn}
					</p>
				</Card>
			})}
		</>
	</>;
};
  
export default Books;
  