'use client';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import NetworkAndTypeStep from '../components/NetworkAndTypeStep';
import { useCallback, useMemo, useState } from 'react';
import DetailSettingsStep from '../components/DetailSettingsStep';
import ReviewAndCreateStep from '../components/ReviewAndCreateStep';
import OrderStepper from '../components/OrderStepper';
import { OrderType } from '@/modules/Dashboard/components/MarketList';
import {
	ORDER_CURRENCY_LIST,
	ORDER_NETWORK_LIST,
	ORDER_PROTOCOL_LIST,
} from '@/constant';
import axiosInstance from '@/config/axios.config';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import DoneStep from '../components/DoneStep';
import { useRouter } from 'next/navigation';

export interface IMarketPage {}

export default function OrderPage(props: IMarketPage) {
	const [crrStep, setCrrStep] = useState<number>(0);
	const [orderType, setOrderType] = useState<OrderType>('Buy');
	const [network, setNetwork] = useState<string>(ORDER_NETWORK_LIST[0]);
	const [currency, setCurrency] = useState<string>(ORDER_CURRENCY_LIST[0]);
	const [totalPoints, setTotalPoints] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [protocol, setProtocol] = useState<string>(
		ORDER_PROTOCOL_LIST[0].name,
	);

	const { setVisible: setModalVisible } = useWalletModal();
	const { publicKey } = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});
	const router = useRouter();

	const handleNextStep = useCallback(async () => {
		if (crrStep < 2) {
			setCrrStep((prevStep) => prevStep + 1);
			return;
		}
		if (crrStep < 3) {
			if (!publicKey) {
				setModalVisible(true);
			} else {
				const protocolId = ORDER_PROTOCOL_LIST.find(
					(item: { id: string; name: string }) => {
						if (item.name === protocol) return item.id;
					},
				);

				const submitData = {
					marketType: 'Points',
					offerType: orderType,
					network: network,
					userId: publicKey.toBase58(),
					protocolId: protocolId,
					pointsAmount: totalPoints,
					currency: currency,
					currencyAmount: totalPrice,
				};
				try {
					const res = await axiosInstance.post(
						'/offer/create',
						submitData,
					);
					if (res) {
						setCrrStep(3);
					}
				} catch (error) {
					console.log(error);
				}
			}
			return;
		}
		if (crrStep === 3) {
			setCrrStep(0);
			setOrderType('Buy');
			setNetwork(ORDER_NETWORK_LIST[0]);
			setCurrency(ORDER_CURRENCY_LIST[0]);
			setTotalPoints(0);
			setTotalPrice(0);
			setProtocol(ORDER_PROTOCOL_LIST[0].name);
		}
	}, [
		crrStep,
		publicKey,
		setModalVisible,
		currency,
		network,
		orderType,
		protocol,
		totalPoints,
		totalPrice,
	]);

	const handlePrevStep = useCallback(() => {
		if (crrStep === 3) {
			router.push('/dashboard');
		} else {
			setCrrStep((prevStep) => prevStep - 1);
		}
	}, [crrStep, router]);

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
						totalPrice={totalPrice}
						setTotalPrice={setTotalPrice}
						totalPoints={totalPoints}
						setTotalPoints={setTotalPoints}
						protocol={protocol}
						setProtocol={setProtocol}
						currency={currency}
						setCurrency={setCurrency}
					/>
				);
			case 2:
				return (
					<ReviewAndCreateStep
						totalPoints={totalPoints}
						totalPrice={totalPrice}
						orderType={orderType}
						protocol={protocol}
						currency={currency}
					/>
				);
			case 3:
				return <DoneStep />;
			default:
				break;
		}
	}, [
		crrStep,
		orderType,
		network,
		setNetwork,
		totalPrice,
		protocol,
		currency,
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
						{crrStep < 3 ? 'Back' : 'Return Home'}
					</Button>
				)}
				<Button
					color='primary'
					variant='contained'
					fullWidth
					onClick={handleNextStep}
				>
					{crrStep < 2
						? 'Next'
						: crrStep < 3
						? `Deposit ${totalPrice} USDC`
						: 'Create Offer Again'}
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
