import IconFilter from '@/assets/icons/IconFilter';
import IconResetFilter from '@/assets/icons/IconResetFilter';
import { Box, Button, Divider, IconButton, Stack } from '@mui/material';
import { Key, useCallback, useState } from 'react';

const marketTypeList = ['Treding', 'Flash Deal'];

type OrderType = 'buy' | 'sell';

export default function MarketListHeader() {
	const [marketType, setMarketType] = useState<string>(marketTypeList[0]);
	const [orderType, setOrderType] = useState<OrderType>('buy');

	const selectMarketType = useCallback((type: string) => {
		setMarketType(type);
	}, []);

	const selectOrderType = useCallback((type: OrderType) => {
		setOrderType(type);
	}, []);

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			{/* Market Filter */}
			<Stack
				direction={'row'}
				spacing={'16px'}
				flexGrow={1}
			>
				{marketTypeList.map((type: string, key: Key) => (
					<Button
						key={key}
						variant={marketType === type ? 'outlined' : 'contained'}
						color={marketType === type ? 'primary' : 'info'}
						onClick={() => selectMarketType(type)}
						size='large'
					>
						{type}
					</Button>
				))}
			</Stack>

			{/* Order Filter */}
			<Stack
				direction={'row'}
				spacing={'16px'}
				divider={
					<Divider
						orientation='vertical'
						flexItem
						sx={{
							backgroundColor: '#6E727D',
							margin: 0,
							padding: 0,
						}}
					/>
				}
			>
				<Stack
					direction={'row'}
					spacing={'8px'}
				>
					<Button
						variant='text'
						color={orderType === 'buy' ? 'primary' : 'info'}
						onClick={() => selectOrderType('buy')}
						size='small'
					>
						Buy
					</Button>
					<Button
						variant='text'
						color={orderType === 'sell' ? 'primary' : 'info'}
						onClick={() => selectOrderType('sell')}
						size='small'
					>
						Sell
					</Button>
				</Stack>
				<Stack
					direction={'row'}
					spacing={'8px'}
				>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						padding={'8px'}
						border={'1px solid #000'}
						borderRadius={'8px'}
					>
						<IconFilter
							width='24'
							height='24'
							color='#FFF'
						/>
					</Box>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						padding={'8px'}
						border={'1px solid #000'}
						borderRadius={'8px'}
					>
						<IconResetFilter
							width='24'
							height='24'
							color='#FFF'
						/>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}
