'use client';

import { Box, Paper } from '@mui/material';
import MarketListMain from './Main';
import MarketListHeader from './Header';

export default function MarketList() {
	return (
		<Paper>
			<Box
				padding={'32px'}
				display={'flex'}
				flexDirection={'column'}
				gap={'16px'}
			>
				<MarketListHeader />
				<Box
					width={'100%'}
					border={'1px dashed rgba(255,255,255,0.4)'}
				/>
				<MarketListMain />
			</Box>
		</Paper>
	);
}
