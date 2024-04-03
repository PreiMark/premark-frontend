import { Button, ButtonGroup } from '@mui/material';
import { Key, useCallback, useState } from 'react';

const orderList = ['buy', 'sell', 'full', 'close'];

export default function OrderFilter() {
	const [crrOrder, setCrrOrder] = useState<string>(orderList[0]);

	const selectOrder = useCallback((value: string) => {
		setCrrOrder(value);
	}, []);

	const renderOrderLabel = (label: string) => {
		switch (label) {
			case 'buy':
				return 'Buy';
			case 'sell':
				return 'Sell';
			case 'full':
				return '100% Filled';
			case 'close':
				return 'Closed';
			default:
				break;
		}
	};

	return (
		<ButtonGroup
			variant='outlined'
			color='secondary'
			aria-label='order filter button group'
		>
			{orderList.map((label: string, key: Key) => (
				<Button
					variant={label === crrOrder ? 'contained' : 'outlined'}
					key={key}
					color={label === crrOrder ? 'secondary' : 'info'}
					onClick={() => selectOrder(label)}
					sx={{ px: '24px', py: '16px', whiteSpace: 'nowrap' }}
				>
					{renderOrderLabel(label)}
				</Button>
			))}
		</ButtonGroup>
	);
}
