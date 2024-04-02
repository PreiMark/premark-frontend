'use client';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import NetworkAndTypeStep from '../components/NetworkAndTypeStep';
import { useCallback, useMemo, useState } from 'react';
import DetailSettingsStep from '../components/DetailSettingsStep';
import ReviewAndCreateStep from '../components/ReviewAndCreateStep';

export interface IMarketPage {}

export default function MarketPage(props: IMarketPage) {
	const [crrStep, setCrrStep] = useState<number>(0);

	const handleNextStep = useCallback(() => {
		setCrrStep((prevStep) => prevStep + 1);
	}, []);

	const handlePrevStep = useCallback(() => {
		setCrrStep((prevStep) => prevStep - 1);
	}, []);

	const renderCrrStep = useMemo(() => {
		switch (crrStep) {
			case 0:
				return <NetworkAndTypeStep />;
			case 1:
				return <DetailSettingsStep />;
			case 2:
				return <ReviewAndCreateStep />;
			default:
				break;
		}
	}, [crrStep]);

	return (
		<GradientBox>
			{renderCrrStep}
			<Box
				display={'flex'}
				gap={'1.5rem'}
			>
				<Button
					color='info'
					variant='outlined'
					fullWidth
					disabled={crrStep === 0}
					onClick={handlePrevStep}
				>
					Back
				</Button>
				<Button
					color='primary'
					variant='contained'
					disabled={crrStep === 2}
					fullWidth
					onClick={handleNextStep}
				>
					Next
				</Button>
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
