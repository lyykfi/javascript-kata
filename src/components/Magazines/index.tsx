import React from "react";
import { Typography, Card, Tag } from 'antd';
import { Magazine } from 'models/magazine';
import AuthorContainer from "components/Author/container";

interface Props {
	magazineList: Magazine[];
}

const Magazines: React.FC<Props> = (props) => {
	const { magazineList } = props;

	return <>
		<Typography.Title level={2}>Magazines</Typography.Title>
		
		{magazineList.length ? 
		<>
			{(magazineList ?? []).map((magazine, index) => {
				return <Card
					key={index}
					title={magazine.title}>

					<p>
						{magazine.authors.map((author) => {
							return <Tag key={author} color="magenta">
								<AuthorContainer email={author} />
							</Tag>;
						})}
					</p>
					<p>
						{magazine.isbn}<br />
						{magazine.publishedAt} 
					</p>
				</Card>
			})}
		</> : 'Magazines not found'}
	</>;
};
  
export default Magazines;
  