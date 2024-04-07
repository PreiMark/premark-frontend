'use client';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import NetworkAndTypeStep from '../components/NetworkAndTypeStep';
import { useCallback, useMemo, useState } from 'react';
import DetailSettingsStep from '../components/DetailSettingsStep';
import ReviewAndCreateStep from '../components/ReviewAndCreateStep';
import OrderStepper from '../components/OrderStepper';
import { useProvider } from '@/hooks/useProvider';

export interface IMarketPage {}

export default function OrderPage(props: IMarketPage) {
	const [crrStep, setCrrStep] = useState<number>(0);
	// const { open, setOpen } = useWalletDialog();

	const provider = useProvider();

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
		<GradientContainer>
			<OrderStepper activeStep={crrStep} />
			{renderCrrStep}
			<Box
				display={'flex'}
				gap={'1.5rem'}
			>
				{crrStep !== 0 && (
					<Button
						color='info'
						variant='outlined'
						fullWidth
						onClick={handlePrevStep}
					>
						Back
					</Button>
				)}
				{crrStep !== 2 && (
					<Button
						color='primary'
						variant='contained'
						fullWidth
						onClick={handleNextStep}
					>
						Next
					</Button>
				)}
			</Box>
		</GradientContainer>
	);
}

const GradientContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin: 170px auto;
	padding: 2rem;
	max-width: 694px;
	position: relative;
	border-radius: 27px;
	background: rgba(0, 0, 0, 0.85);
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 24px;
		padding: 3px;
		background: linear-gradient(to bottom right, #ffd2dd, #fc3b69);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}
`;
