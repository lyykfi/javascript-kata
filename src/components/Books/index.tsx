import React from "react";
import { Typography, Card, Tag } from 'antd';
import { Book } from "models/book";
import AuthorContainer from "components/Author/container";

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

					<p>
						{book.authors.map((author) => {
							return <Tag key={author} color="magenta">
								<AuthorContainer email={author} />
							</Tag>;
						})}
					</p>

					<p>{book.description}</p>
					<p>
						{book.isbn}
					</p>
				</Card>
			})}
		</>
	</>;
};
  
export default Books;
  