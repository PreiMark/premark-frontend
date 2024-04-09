import axiosInstance from '@/config/axios.config';
import { OrderType } from '@/modules/Dashboard/components/MarketList';
import { Box, Chip, OutlinedInput, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

interface DetailSettingsStepProps {
	network: string;
	orderType: OrderType;
	totalPrice: number;
	orderData: any;
	setOrderData: (value: any) => void;
	setTotalPoints: (value: number) => void;
}

export default function DetailSettingsStep({
	network,
	orderType,
	totalPrice,
	orderData,
	setOrderData,
	setTotalPoints,
}: DetailSettingsStepProps) {
	const searchParams = useSearchParams();
	const { setVisible: setModalVisible } = useWalletModal();
	const { publicKey } = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});

	const onTotalPointsChange = (event: ChangeEvent<HTMLInputElement>) => {
		const point: number = Number(event.target.value);
		if (point < 0) {
			return;
		} else {
			setTotalPoints(point);
		}
	};

	useEffect(() => {
		const fetchOrderData = async () => {
			try {
				const id = searchParams.get('id');
				const res = await axiosInstance.get(`/offer/${id}`, {
					data: {
						marketType: 'Points',
						offerType: orderType,
						network: network,
						userId: publicKey?.toBase58(),
						status: 'Requested',
					},
				});
				if (res) {
					setOrderData(res.data.data.data);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchOrderData();
	}, [network, orderType, publicKey, searchParams, setOrderData]);

	return (
		<Stack
			direction={'column'}
			spacing={'32px'}
		>
			{/*  */}
			<Box
				width={'100%'}
				bgcolor={'#000000'}
				padding={'16px'}
				borderRadius={'8px'}
				position={'relative'}
			>
				<Stack
					direction={'column'}
					spacing={'16px'}
				>
					<Chip
						label={orderType}
						color={orderType === 'Buy' ? 'primary' : 'secondary'}
						sx={{ width: 'max-content' }}
						size='small'
					/>
					<OutlinedInput
						placeholder='Amount'
						type='number'
						onChange={onTotalPointsChange}
						color='primary'
					/>
					<Typography
						fontSize={'14px'}
						lineHeight={'20px'}
					>
						1 Point = ${orderData?.pricePerPoint}
					</Typography>
				</Stack>
				<Box
					position={'absolute'}
					right={'10px'}
					bottom={'10px'}
					borderRadius={'8px'}
					bgcolor={'rgba(255,255,255,0.1)'}
					padding={'10px 20px'}
				>
					{orderData?.protocolName}
				</Box>
			</Box>

			{/*  */}
			<Box
				width={'100%'}
				bgcolor={'#000000'}
				padding={'16px'}
				borderRadius={'8px'}
				position={'relative'}
			>
				<Stack
					direction={'column'}
					spacing={'16px'}
				>
					<Chip
						label='For'
						color='info'
						sx={{ width: 'max-content' }}
						size='small'
					/>
					<Typography
						fontSize={'20px'}
						fontWeight={700}
					>
						{totalPrice}
					</Typography>
				</Stack>
				<Box
					position={'absolute'}
					right={'10px'}
					bottom={'10px'}
					borderRadius={'8px'}
					bgcolor={'rgba(255,255,255,0.1)'}
					padding={'10px 20px'}
				>
					USDC
				</Box>
			</Box>
		</Stack>
	);
}
