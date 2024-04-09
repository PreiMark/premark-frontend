'use client';

import { epochToMmDdYyyy } from '@/utils/epochToMmDdYyyy';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';

interface RightPanelProps {
	offerData: any;
}

export default function RightPanel({ offerData }: RightPanelProps) {
	return (
		<Paper sx={{ width: '100%', maxWidth: { xs: 'none', lg: '510px' } }}>
			<Stack
				direction={'column'}
				spacing={'16px'}
				paddingX={'32px'}
				paddingY={'40px'}
				width={'100%'}
			>
				<Typography
					fontSize={'16px'}
					lineHeight={'24px'}
					fontWeight={700}
				>
					OFFER DETAILS
				</Typography>
				<Stack
					direction={'column'}
					spacing={'16px'}
					divider={
						<Divider
							orientation='horizontal'
							flexItem
							sx={{
								backgroundColor: '#FFFFFF',
								margin: 0,
								padding: 0,
							}}
						/>
					}
				>
					{/* Offer */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Offer
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.pointsAmount}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Equivalent Token */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Equivalent Token
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'secondary'}
							>
								TBA
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* For */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							For
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.currencyAmount}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Price / Points */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Price / Points
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.pricePerPoint}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Fill Type */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Fill Type
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								TBA
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Filled Amount */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Filled Amount
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.filledAmount}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Remaining Amount */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Remaining Amount
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.remainingAmount}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Offer Creator */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Offer Creator
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{offerData?.offerCreator.slice(0, 2)} + {'..'} +{' '}
								{offerData?.offerCreator.slice(-4)}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Offer Tx */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Offer Tx
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>{`${offerData?.transactionHash.slice(
								2,
							)}..${offerData?.transactionHash.slice(
								-4,
							)}`}</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Starting at */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Starting at
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								{epochToMmDdYyyy(offerData?.createdDate)}
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Closing at */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Closing at
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								TBA
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>

					{/* Closing in */}
					<Stack
						alignItems={'center'}
						direction={'row'}
						justifyContent={'space-between'}
						spacing={'16px'}
					>
						<Typography
							fontSize={'14px'}
							lineHeight={'24px'}
							color={'rgba(255,255,255,0.5)'}
						>
							Closing in
						</Typography>
						<Stack
							direction={'row'}
							spacing={'8px'}
						>
							<Typography
								fontSize={'14px'}
								lineHeight={'24px'}
								color={'rgba(255,255,255)'}
							>
								TBA
							</Typography>
							<Box></Box>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Paper>
	);
}
