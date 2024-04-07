import LinearProgressWithLabel from '@/components/common/LinearProgressWithLabel';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import thumbnail from '@/assets/images/Thumbnail.png';

export default function MarketPoint() {
	return (
		<Paper>
			<Box
				display={'flex'}
				height={'max-content'}
				padding={'12px'}
				alignItems={'center'}
				gap={'16px'}
			>
				<Stack
					direction={'column'}
					spacing={'8px'}
					flexGrow={1}
				>
					<Typography
						fontSize={'32px'}
						component={'h2'}
						lineHeight={'40px'}
						fontWeight={700}
					>
						Inovaz Point
					</Typography>
					<Typography
						fontSize={'16px'}
						component={'p'}
						lineHeight={'24px'}
						color={'#C8C3D2'}
					>
						End in: 01d - 02h | 06m : 10s
					</Typography>
					<Stack
						direction={'row'}
						spacing={'10px'}
						divider={
							<Divider
								orientation='vertical'
								flexItem
								sx={{
									backgroundColor: '#C8C3D2',
									margin: 0,
									padding: 0,
								}}
							/>
						}
					>
						<Typography
							fontSize={'16px'}
							component={'p'}
							lineHeight={'24px'}
							color={'#FC3B69'}
						>
							Floor price: 0.3/pts
						</Typography>
						<Typography
							fontSize={'16px'}
							component={'p'}
							lineHeight={'24px'}
							color={'#C8C3D2'}
							sx={{ textDecoration: 'line-through' }}
						>
							1$/pts
						</Typography>
						<Typography
							fontSize={'16px'}
							component={'p'}
							lineHeight={'24px'}
							color={'#FFFFFF'}
							fontWeight={700}
						>
							70%
						</Typography>
					</Stack>
					<LinearProgressWithLabel
						value={500}
						color='primary'
					/>
					<Stack
						direction={'row'}
						spacing={'16px'}
					>
						<Button
							color='primary'
							variant='outlined'
						>
							BUY NOW
						</Button>
						<Button
							color='info'
							variant='contained'
						>
							SHARE DEAL GET 20% DISCOUNT
						</Button>
					</Stack>
				</Stack>
				<Box
					overflow={'hidden'}
					borderRadius={'22px'}
					border={'2px solid #FC3B69'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<Image
						src={thumbnail.src}
						alt='thumbnail'
						width={336}
						height={247}
					/>
				</Box>
			</Box>
		</Paper>
	);
}
