import QuizPoint from '../components/QuizPoint';
import MarketPoint from '../components/MarketPoint';
import { Grid, Stack } from '@mui/material';
import MarketList from '../components/MarketList';
export default function DashboardPage() {
	return (
		<Grid
			container
			width={'100%'}
			spacing={'32px'}
		>
			<Grid
				item
				xs={12}
				lg={8}
			>
				<MarketPoint />
			</Grid>
			<Grid
				item
				xs={12}
				lg={4}
			>
				<QuizPoint />
			</Grid>
			<Grid
				item
				xs={12}
			>
				<MarketList />
			</Grid>
		</Grid>
	);
}
