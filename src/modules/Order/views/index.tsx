'use client';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import NetworkAndTypeStep from '../components/NetworkAndTypeStep';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DetailSettingsStep from '../components/DetailSettingsStep';
import ReviewAndCreateStep from '../components/ReviewAndCreateStep';
import OrderStepper from '../components/OrderStepper';
import { OrderType } from '@/modules/Dashboard/components/MarketList';
import { ORDER_NETWORK_LIST } from '@/constant';
import axiosInstance from '@/config/axios.config';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

export interface IMarketPage {}

export default function OrderPage(props: IMarketPage) {
	const [crrStep, setCrrStep] = useState<number>(0);
	const [orderType, setOrderType] = useState<OrderType>('Buy');
	const [network, setNetwork] = useState<string>(ORDER_NETWORK_LIST[0]);
	const [totalPoints, setTotalPoints] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [orderData, setOrderData] = useState<any>();
	const { setVisible: setModalVisible } = useWalletModal();
	const { publicKey } = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});
	useEffect(() => {
		if (orderData && orderData?.pricePerPoint) {
			setTotalPrice(totalPoints * orderData?.pricePerPoint);
		}
	}, [totalPoints, orderData, setTotalPrice]);

	const handleNextStep = useCallback(async () => {
		if (crrStep < 2) {
			setCrrStep((prevStep) => prevStep + 1);
		} else {
			if (orderData && publicKey) {
				const submitData = {
					marketType: 'Points',
					offerType: orderType,
					network: network,
					userId: publicKey.toBase58(),
					protocolId: orderData.protocolId,
					pointsAmount: totalPoints,
					currency: 'USDT',
					currencyAmount: totalPrice,
				};
				try {
					await axiosInstance.post('/offer/create', submitData);
				} catch (error) {
					console.log(error);
				}
			}
		}
	}, [
		crrStep,
		network,
		orderType,
		publicKey,
		orderData,
		totalPoints,
		totalPrice,
	]);

	const handlePrevStep = useCallback(() => {
		setCrrStep((prevStep) => prevStep - 1);
	}, []);

	const renderCrrStep = useMemo(() => {
		switch (crrStep) {
			case 0:
				return (
					<NetworkAndTypeStep
						orderType={orderType}
						setOrderType={setOrderType}
						network={network}
						setNetwork={setNetwork}
					/>
				);
			case 1:
				return (
					<DetailSettingsStep
						orderType={orderType}
						network={network}
						orderData={orderData}
						totalPrice={totalPrice}
						setTotalPoints={setTotalPoints}
						setOrderData={setOrderData}
					/>
				);
			case 2:
				return (
					<ReviewAndCreateStep
						orderData={orderData}
						totalPoints={totalPoints}
						totalPrice={totalPrice}
						orderType={orderType}
					/>
				);
			default:
				break;
		}
	}, [
		crrStep,
		orderType,
		network,
		setNetwork,
		totalPrice,
		orderData,
		totalPoints,
	]);

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
						color='secondary'
						variant='outlined'
						fullWidth
						onClick={handlePrevStep}
					>
						Back
					</Button>
				)}
				<Button
					color='primary'
					variant='contained'
					fullWidth
					onClick={handleNextStep}
				>
					{crrStep < 2 ? 'Next' : `Deposit ${totalPrice} USDC`}
				</Button>
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
