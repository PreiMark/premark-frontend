import IconETH from '@/assets/icons/IconETH';
import CircularProgressWithLabel from '@/components/common/CircularProgressWithLabel';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function OrderCard() {
	return (
		<Paper
			variant='elevation'
			elevation={0}
		>
			<Stack
				padding={'2rem'}
				direction={'column'}
				spacing={'40px'}
			>
				{/* Header */}
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Box
						display={'flex'}
						gap={'19px'}
						width={'100%'}
						alignItems={'center'}
					>
						<Image
							src={'/DEFAULT_IMAGE.png'}
							alt=''
							width={80}
							height={80}
						/>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'space-between'}
						>
							<Box
								display={'flex'}
								gap={'8px'}
								alignItems={'center'}
							>
								<Typography
									component={'h3'}
									fontSize={'32px'}
									fontWeight={600}
								>
									Azuro
								</Typography>
								<Typography
									fontSize={'16px'}
									fontWeight={600}
									color={'#6E727D'}
								>
									#2787
								</Typography>
							</Box>
							<Box
								paddingX={'12px'}
								paddingY={'4px'}
								borderRadius={'8px'}
								display={'flex'}
								gap={'8px'}
								alignItems={'center'}
								bgcolor={'rgba(151, 71, 255, 0.20)'}
								color={'#9945FF'}
								width={'max-content'}
							>
								Partial Fill
							</Box>
						</Box>
					</Box>
					<CircularProgressWithLabel
						value={8}
						color='secondary'
						size={100}
						thickness={13}
						sx={{
							borderRadius: '100%',
							boxShadow:
								'inset 0 0 0 30px rgba(255, 255, 255, 0.20)',
						}}
					/>
				</Box>

				{/* Body */}
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'0.5rem'}
				>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
					>
						<Typography
							fontWeight={600}
							color={'#6E727D'}
						>
							OFFER
						</Typography>
						<Typography
							fontWeight={600}
							color={'#6E727D'}
						>
							FOR
						</Typography>
					</Box>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Box
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
						>
							<Typography
								fontSize={'1.5rem'}
								fontWeight={600}
							>
								1.00M pts
							</Typography>
							<Box
								borderRadius={'100%'}
								overflow={'hidden'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
							>
								<Image
									src={'/DEFAULT_IMAGE.png'}
									alt=''
									width={32}
									height={32}
								/>
							</Box>
						</Box>

						<Box
							display={'flex'}
							gap={'1rem'}
							paddingY={'0.5rem'}
							alignItems={'center'}
						>
							<Typography
								fontSize={'1.5rem'}
								fontWeight={600}
								color={'#9945FF'}
							>
								0.97
							</Typography>
							<Box
								borderRadius={'100%'}
								bgcolor={'white'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								width={'24px'}
								height={'24px'}
							>
								<IconETH />
							</Box>
						</Box>
					</Box>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
					>
						<Typography
							fontWeight={600}
							color={'#6E727D'}
						>
							$0.00347 / Point
						</Typography>
						<Typography
							fontWeight={600}
							color={'#6E727D'}
						>
							$3478.2
						</Typography>
					</Box>
				</Box>

				<Divider
					orientation='horizontal'
					flexItem
					sx={{
						backgroundColor: '#6E727D',
						margin: 0,
						padding: 0,
					}}
				/>
				{/* Footer */}
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Typography color={'#6E727D'}>2 hours ago</Typography>
					<Button
						variant='contained'
						color='secondary'
					>
						Buy
					</Button>
				</Box>
			</Stack>
		</Paper>
	);
}
