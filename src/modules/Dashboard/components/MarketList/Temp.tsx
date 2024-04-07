import IconETH from '@/assets/icons/IconETH';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function Temp() {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			width={'100%'}
			padding={'32px'}
			borderRadius={'16px'}
			gap={'8px'}
			border={'1px solid #404040'}
			bgcolor={'#000000'}
		>
			{/* Header */}
			<Box
				display={'flex'}
				gap={'16px'}
				alignItems={'center'}
			>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
					borderRadius={'100%'}
					overflow={'hidden'}
					minWidth={'48px'}
					minHeight={'48px'}
				>
					<Image
						src={'/DEFAULT_IMAGE.png'}
						alt='market thumbnail'
						width={48}
						height={48}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
				>
					<Typography fontWeight={700}>Inovaz</Typography>
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'5px'}
					>
						<Box
							borderRadius={'100%'}
							bgcolor={'white'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							width={'16px'}
							height={'16px'}
						>
							<IconETH />
						</Box>
						<Typography
							fontSize={'14px'}
							lineHeight={'22px'}
							color={'#C3C0C7'}
						>
							Ethereum
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Body */}
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Box>
					<Typography
						fontSize={'13px'}
						lineHeight={'21px'}
						color={'#9E97A3'}
					>
						Price of range:
					</Typography>
					<Typography
						color={'#FC3B69'}
						fontSize={'14px'}
						lineHeight={'22px'}
						fontWeight={700}
					>
						0,3 -1 USDC/pts
					</Typography>
				</Box>
				<Box>
					<Typography
						fontSize={'13px'}
						lineHeight={'21px'}
						textAlign={'right'}
						color={'#9E97A3'}
					>
						Total:
					</Typography>
					<Stack
						direction={'row'}
						spacing={'4px'}
						alignItems={'center'}
					>
						<Box
							borderRadius={'100%'}
							bgcolor={'white'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							width={'16px'}
							height={'16px'}
						>
							<IconETH />
						</Box>
						<Typography
							fontSize={'14px'}
							lineHeight={'22px'}
							fontWeight={700}
						>
							100k pts
						</Typography>
					</Stack>
				</Box>
			</Box>

			{/* Divider */}
			<Box
				width={'100%'}
				border={'1px dashed rgba(255,255,255,0.4)'}
			/>

			<Stack
				direction={'row'}
				justifyContent={'space-between'}
			>
				<Box>
					<Typography
						fontSize={'13px'}
						lineHeight={'21px'}
					>
						Orders:
					</Typography>
					<Typography
						fontSize={'14px'}
						lineHeight={'22px'}
						fontWeight={700}
					>
						100
					</Typography>
				</Box>
				<Box>
					<Typography
						fontSize={'13px'}
						lineHeight={'21px'}
					>
						Markers:
					</Typography>
					<Typography
						fontSize={'14px'}
						lineHeight={'22px'}
						fontWeight={700}
					>
						75
					</Typography>
				</Box>
				<Box>
					<Typography
						fontSize={'13px'}
						lineHeight={'21px'}
					>
						Vol:
					</Typography>
					<Typography
						fontSize={'14px'}
						lineHeight={'22px'}
						fontWeight={700}
					>
						$1M
					</Typography>
				</Box>
			</Stack>
			<Stack
				direction={'row'}
				spacing={'8px'}
				alignItems={'center'}
			>
				<Button
					variant='outlined'
					color='primary'
				>
					EXPLORE MARKET
				</Button>
				<Typography
					color={'secondary'}
					fontWeight={700}
					width={'min-content'}
				>
					60%
				</Typography>
			</Stack>
		</Box>
	);
}
