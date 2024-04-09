import { Box, Grid } from '@mui/material';
import { Key } from 'react';
import ProjectCard from './ProjectCard';

interface MarketListMainProps {
	projectData: any[];
}

export default function MarketListMain({ projectData }: MarketListMainProps) {
	if (projectData?.length > 0) {
		return (
			<Grid
				container
				spacing={'16px'}
			>
				{projectData.map((data: any, key: Key) => (
					<Grid
						key={key}
						item
						xl={12 / 5}
						lg={3}
						md={4}
						sm={6}
						xs={12}
					>
						<ProjectCard data={data} />
					</Grid>
				))}
			</Grid>
		);
	} else {
		return (
			<Box
				width={'100%'}
				height={'300px'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				There is no project
			</Box>
		);
	}
}
