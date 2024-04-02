import { Box, Radio, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export default function NetworkAndTypeStep() {
	const [value, setValue] = useState<string>('buy');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
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
						name='order-action'
						color='secondary'
						inputProps={{ 'aria-label': 'A' }}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'0.25rem'}
				>
					<Typography
						fontWeight={600}
						lineHeight={'1.5rem'}
					>
						Buying
					</Typography>
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
						name='order-action'
						color='secondary'
						inputProps={{ 'aria-label': 'B' }}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'0.25rem'}
				>
					<Typography
						fontWeight={600}
						lineHeight={'1.5rem'}
					>
						Selling
					</Typography>
					<Typography
						fontSize={'0.875rem'}
						color={'#6E727D'}
					>
						You want to sell your points
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
