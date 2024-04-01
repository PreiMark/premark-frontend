'use client';

import { Box, Button, Radio, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export interface IMarketPage {}

export default function MarketPage(props: IMarketPage) {
	const [value, setValue] = useState<string>('buy');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<GradientBox>
			<Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'1.5rem'}
				>
					<Box
						display={'flex'}
						flexDirection={'column'}
						gap={'1rem'}
					>
						<Typography
							fontSize={'1rem'}
							fontWeight={600}
							lineHeight={'1.5rem'}
						>
							Network
						</Typography>
						<Box
							px={'0.75rem'}
							py={'1rem'}
							borderRadius={'0.5rem'}
							border={'1px solid #6E727D'}
						>
							<Typography
								fontSize={'0.875rem'}
								fontWeight={600}
								lineHeight={'1.25rem'}
							>
								0.0338
							</Typography>
						</Box>
					</Box>
					<Box
						display={'flex'}
						gap={'0.75rem'}
					>
						<Box
							display={'flex'}
							alignItems={'flex-start'}
						>
							<Radio
								checked={value === 'buy'}
								onChange={handleChange}
								value='buy'
								name='action'
							/>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							gap={'0.25rem'}
						>
							<Typography>Buying</Typography>
							<Typography
								fontSize={'0.875rem'}
								color={'#6E727D'}
							>
								You want to buy points
							</Typography>
						</Box>
					</Box>
					<Box
						display={'flex'}
						gap={'0.75rem'}
					>
						<Box
							display={'flex'}
							alignItems={'flex-start'}
						>
							<Radio
								checked={value === 'sell'}
								onChange={handleChange}
								value='sell'
								name='action'
							/>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							gap={'0.25rem'}
						>
							<Typography>Selling</Typography>
							<Typography
								fontSize={'0.875rem'}
								color={'#6E727D'}
							>
								You want to sell your points
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					display={'flex'}
					gap={'1.5rem'}
				>
					<Button
						color='secondary'
						variant='outlined'
						fullWidth
					>
						Back
					</Button>
					<Button
						color='primary'
						variant='contained'
						fullWidth
					>
						Next
					</Button>
				</Box>
			</Box>
		</GradientBox>
	);
}

const GradientBox = styled(Box)(() => ({
	display: 'flex',
	margin: '170px auto',
	width: '100%',
	padding: '2rem',
	flexDirection: 'column',
	gap: '1.5rem',
	maxWidth: '694px',
	borderRadius: '1.5rem',
	border: '1px solid',
	borderImageSlice: 1,
	borderImageSource: 'linear-gradient(to bottom right, #9945ff, #08e5b2)',
	WebkitBackgroundOrigin: 'border-box',
	WebkitBackgroundClip: 'content-box, border-box',
}));
