import {
	Box,
	LinearProgress,
	LinearProgressProps,
	Typography,
} from '@mui/material';

export default function LinearProgressWithLabel(
	props: LinearProgressProps & { value: number; maxValue: number },
) {
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			width={'100%'}
		>
			<Box
				marginRight={'8px'}
				flexGrow={1}
			>
				<LinearProgress
					variant='determinate'
					{...props}
				/>
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography
					variant='body2'
					whiteSpace={'nowrap'}
				>{`${props.value} / ${props.maxValue}`}</Typography>
			</Box>
		</Box>
	);
}
