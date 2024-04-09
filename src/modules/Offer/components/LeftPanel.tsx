'use client';

import { Box, Button, Paper, Stack, Typography } from '@mui/material';

interface LeftPanelProps {
	offerData: any;
}

export default function LeftPanel({ offerData }: LeftPanelProps) {
	return (
		<Paper>
			<Stack
				direction={'column'}
				spacing={'16px'}
				paddingX={'32px'}
				paddingY={'40px'}
				width={'100%'}
				justifyContent={'center'}
			>
				{/* Header */}
				<Stack
					direction={'row'}
					spacing={'16px'}
				>
					{/* Protocol Avatar */}

					{/* Protocol Info */}

					{/* Filling Progress */}
				</Stack>
				<Box
					fontSize={'16px'}
					lineHeight={'20px'}
					color={'rgba(255,255,255,0.5)'}
				>
					User{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						{offerData?.offerCreator}
					</Typography>{' '}
					is{' '}
					<Typography
						color={
							offerData?.offerType === 'Sell'
								? 'error'
								: 'secondary'
						}
						component={'span'}
					>
						{offerData?.offerType}ing
					</Typography>{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						{offerData?.pointsAmount} {offerData?.protocolName}{' '}
						points
					</Typography>{' '}
					for{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						{offerData?.currencyAmount} USDC
					</Typography>
					. Do you want to buy
				</Box>
				<Button
					variant='contained'
					color='primary'
					size='large'
				>
					Deposit {offerData?.currencyAmount} USDC
				</Button>
				<Box
					fontSize={'16px'}
					lineHeight={'20px'}
					color={'rgba(255,255,255,0.5)'}
				>
					<Typography
						color={
							offerData?.offerType === 'Sell'
								? 'error'
								: 'secondary'
						}
						component={'span'}
					>
						{offerData?.offerType}ing
					</Typography>{' '}
					{offerData?.pointsAmount}{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						{offerData?.protocolName} points
					</Typography>{' '}
					for{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						{offerData?.currencyAmount} USDC
					</Typography>
					<br />
					You will automatically receive the{' '}
					<Typography
						color={'#FFF'}
						component={'span'}
					>
						equivalent amount of the protocol&apos;s tokens
					</Typography>{' '}
					based on the total points purchased after settlement.
				</Box>
			</Stack>
		</Paper>
	);
}
