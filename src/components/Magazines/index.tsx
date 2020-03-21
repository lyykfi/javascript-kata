import React from "react";
import { Typography, Card } from 'antd';
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

					<Typography.Title level={3}>
						{magazine.authors}
					</Typography.Title>
					<p>
						{magazine.publishedAt} {magazine.isbn}
					</p>
				</Card>
			})}
		</>
	</>;
};
  
export default Magazines;
  