import { Box, CircularProgress } from '@mui/material';

export default function CardCircularProgress() {
	return (
		<Box>
			<CircularProgress
				color='secondary'
				size={100}
				thickness={13}
				value={8}
				variant='determinate'
				sx={{
					backgroundColor: '#6E727D',
					borderRadius: '100%',
				}}
			/>
		</Box>
	);
}
