import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Fragment, Key, useCallback, useState } from 'react';

const networkFilterList = [
	{ network: 'azuro', name: 'Azuro', amount: 7 },
	{ network: 'zeus-network', name: 'Zeus network', amount: 5 },
	{ network: 'puffer-finance', name: 'Puffer Finance', amount: 6 },
	{ network: 'swell', name: 'Swell', amount: 7 },
	{ network: 'marginfi', name: 'Marginfi', amount: 4 },
];

interface INetwork {
	network: string;
	amount: number;
	name: string;
}

export default function NetworkFilter() {
	const [crrNetwork, setCrrNetwork] = useState<string>(
		networkFilterList[0].network,
	);

	const selectNetwork = useCallback((value: string) => {
		setCrrNetwork(value);
	}, []);

	return (
		<Box
			display={'flex'}
			gap={'0.5rem'}
		>
			{networkFilterList.map((network: INetwork, key: Key) => (
				<Button
					variant='outlined'
					key={key}
					color={
						network.network === crrNetwork ? 'secondary' : 'info'
					}
					onClick={() => selectNetwork(network.network)}
					sx={{
						px: '16px',
						py: '12px',
						color: 'white',
						whiteSpace: 'nowrap',
						height: 'min-content',
					}}
					endIcon={
						<Typography
							px={'6px'}
							bgcolor={'#483062'}
							borderRadius={'4px'}
							color={'white'}
							fontSize={'12px'}
							lineHeight={'24px'}
						>
							{network.amount}
						</Typography>
					}
				>
					{network.name}
				</Button>
			))}
		</Box>
	);
}
