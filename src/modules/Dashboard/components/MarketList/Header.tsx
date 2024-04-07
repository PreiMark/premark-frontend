import IconFilter from '@/assets/icons/IconFilter';
import IconResetFilter from '@/assets/icons/IconResetFilter';
import { Box, Button, Divider, Stack } from '@mui/material';
import { Key } from 'react';
import { OrderType } from '.';
import { MARKET_TYPE_LIST } from '@/constant';

interface MarketListHeaderProps {
	marketType: string;
	orderType: OrderType;
	selectMarketType: (type: string) => void;
	selectOrderType: (type: OrderType) => void;
}

export default function MarketListHeader({
	marketType,
	orderType,
	selectMarketType,
	selectOrderType,
}: MarketListHeaderProps) {
	return (
		<Box
			display={'flex'}
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems={'center'}
			gap={'16px'}
			justifyContent={'space-between'}
		>
			{/* Market Filter */}
			<Stack
				direction={'row'}
				spacing={'16px'}
				flexGrow={1}
			>
				{MARKET_TYPE_LIST.map((type: string, key: Key) => (
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
						color={orderType === 'Buy' ? 'primary' : 'info'}
						onClick={() => selectOrderType('Buy')}
						size='small'
						sx={{ background: '#000000' }}
					>
						Buy
					</Button>
					<Button
						variant='text'
						color={orderType === 'Sell' ? 'primary' : 'info'}
						onClick={() => selectOrderType('Sell')}
						size='small'
						sx={{ background: '#000000' }}
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
