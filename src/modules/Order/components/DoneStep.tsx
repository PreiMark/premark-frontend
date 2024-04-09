import { Button, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DoneStep() {
	const router = useRouter();

	return (
		<Paper>
			<Stack
				direction={'column'}
				spacing={'16px'}
				padding={'32px'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Typography>You&apos;re deposit successfully</Typography>
				<Button
					variant='contained'
					color='info'
				>
					<Link
						href={'google.com'}
						target='_blank'
					>
						Track Tx
					</Link>
				</Button>
			</Stack>
		</Paper>
	);
}
