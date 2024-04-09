import { OrderType } from '@/modules/Dashboard/components/MarketList';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

interface ReviewAndCreateStepProps {
	totalPoints: number;
	totalPrice: number;
	orderType: OrderType;
	protocol: string;
	currency: string;
}

export default function ReviewAndCreateStep({
	totalPoints,
	totalPrice,
	orderType,
	protocol,
	currency,
}: ReviewAndCreateStepProps) {
	const calculatePricePerPoint = useMemo(() => {
		if (!totalPoints || !totalPrice) return 0;
		return (totalPrice / totalPoints).toFixed(4);
	}, [totalPoints, totalPrice]);

	return (
		<Stack
			direction={'column'}
			spacing={'16px'}
		>
			<Box
				display={'flex'}
				gap={'12px'}
				padding={'16px 8px'}
				fontWeight={700}
				textTransform={'capitalize'}
			>
				{protocol}
			</Box>
			<Box
				borderRadius={'12px'}
				width={'100%'}
				bgcolor={'#2E262B'}
				padding={'16px'}
				color={'#F67431'}
			>
				When buying Points, you need to wwait until the points convert
				into the protocol’s tokens before you can receive tokens.
			</Box>
			<Box padding={'0 8px'}>
				You are buying{' '}
				<Typography
					component={'span'}
					fontWeight={700}
					textTransform={'capitalize'}
				>
					{totalPoints} {protocol}
				</Typography>{' '}
				points for{' '}
				<Typography
					component={'span'}
					fontWeight={700}
					textTransform={'uppercase'}
				>
					{totalPrice} {currency}
				</Typography>
			</Box>
			<Stack
				borderRadius={'12px'}
				border={'1px solid #6E727D'}
				divider={
					<Divider
						orientation='horizontal'
						flexItem
						sx={{
							backgroundColor: '#C8C3D2',
							margin: 0,
							padding: 0,
						}}
					/>
				}
			>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'20px'}
				>
					<Typography color={'#6E727D'}>Offer Type</Typography>
					<Chip
						label={orderType}
						color={orderType === 'Buy' ? 'primary' : 'secondary'}
						sx={{ width: 'max-content' }}
						size='small'
					/>
				</Box>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'20px'}
				>
					<Typography color={'#6E727D'}>Buy Amount</Typography>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'8px'}
					>
						{totalPoints}
					</Box>
				</Box>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'20px'}
				>
					<Typography color={'#6E727D'}>For</Typography>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'8px'}
					>
						{totalPrice}
					</Box>
				</Box>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'20px'}
				>
					<Typography color={'#6E727D'}>Price / Point</Typography>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'8px'}
					>
						{calculatePricePerPoint}
					</Box>
				</Box>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					padding={'20px'}
				>
					<Typography color={'#6E727D'}>Platform Fee</Typography>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'8px'}
					>
						2.5%
					</Box>
				</Box>
			</Stack>
		</Stack>
	);
}
