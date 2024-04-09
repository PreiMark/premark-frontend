import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';

export default function QuizPoint() {
	return (
		<Paper>
			<Box
				display={'flex'}
				padding={'12px'}
				alignItems={'center'}
				minHeight={'275px'}
				height={'100%'}
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
						Quiz Point
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
			</Box>
		</Paper>
	);
}
