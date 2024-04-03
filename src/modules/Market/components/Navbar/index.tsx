import { Box } from '@mui/material';
import OrderFilter from './OrderFilter';
import NetworkFilter from './NetworkFilter';
import SortFilter from './SortFilter';

export default function Navbar() {
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
		>
			<OrderFilter />
			<NetworkFilter />
			<SortFilter />
		</Box>
	);
}
