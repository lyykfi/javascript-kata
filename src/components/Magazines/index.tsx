import React from "react";
import { Typography, Card, Tag } from 'antd';
import { Magazine } from 'models/magazine';

interface Props {
	magazineList: Magazine[];
}

const Magazines: React.FC<Props> = (props) => {
	const { magazineList } = props;

	return <>
		<Typography.Title level={2}>Magazines</Typography.Title>
		
		<>
			{(magazineList ?? []).map((magazine, index) => {
				return <Card
					key={index}
					title={magazine.title}>

					<p>
						{magazine.authors.map((author) => {
							return <Tag key={author} color="magenta">{author}</Tag>;
						})}
					</p>
					<p>
						{magazine.isbn}<br />
						{magazine.publishedAt} 
					</p>
				</Card>
			})}
		</>
	</>;
};
  
export default Magazines;
  