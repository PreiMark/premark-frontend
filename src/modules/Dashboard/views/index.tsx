'use client';

import QuizPoint from '../components/QuizPoint';
import MarketPoint from '../components/MarketPoint';
import {
	Box,
	Button,
	Divider,
	Grid,
	OutlinedInput,
	Stack,
	Typography,
} from '@mui/material';
import MarketList from '../components/MarketList';
import IconSearch from '@/assets/icons/IconSearch';
import IconNotification from '@/assets/icons/IconNotification';
import IconETH from '@/assets/icons/IconETH';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { useMemo } from 'react';

export default function DashboardPage() {
	const { setVisible: setModalVisible } = useWalletModal();
	const { buttonState, publicKey, walletIcon } = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});

	const renderButton = useMemo(() => {
		if (publicKey) {
			const base58 = publicKey.toBase58();
			const address = base58.slice(0, 2) + '..' + base58.slice(-4);
			return (
				<Button
					// startIcon={
					// 	walletIcon ? (
					// 		<Box
					// 			width={24}
					// 			height={24}
					// 		>
					// 			<Image
					// 				src={atob(walletIcon)}
					// 				alt='wallet icon'
					// 			/>
					// 		</Box>
					// 	) : null
					// }
					color='info'
					variant='contained'
					onClick={() => setModalVisible(true)}
				>
					{address}
				</Button>
			);
		} else {
			switch (buttonState) {
				case 'connecting':
					return (
						<Button
							// startIcon={
							// 	walletIcon ? (
							// 		<Box
							// 			width={24}
							// 			height={24}
							// 		>
							// 			<Image
							// 				src={atob(walletIcon)}
							// 				alt='wallet icon'
							// 			/>
							// 		</Box>
							// 	) : null
							// }
							color='primary'
							variant='contained'
						>
							Connecting
						</Button>
					);
				case 'no-wallet':
					return (
						<Button
							color='primary'
							variant='contained'
							onClick={() => setModalVisible(true)}
						>
							Connect Wallet
						</Button>
					);
				default:
					break;
			}
		}
	}, [buttonState, publicKey, setModalVisible]);

	return (
		<Stack
			direction={'column'}
			spacing={'16px'}
		>
			{/* Header */}
			<Stack
				alignItems={'center'}
				direction={'row'}
				justifyContent={'space-between'}
				spacing={'32px'}
				width={'100%'}
			>
				<Box
					display={{ xs: 'none', md: 'block' }}
					width={'100%'}
					maxWidth={'462px'}
				>
					<OutlinedInput
						startAdornment={
							<IconSearch
								width='24'
								height='24'
								color='#7E7E7E'
							/>
						}
						placeholder='Search...'
						color='primary'
						fullWidth
						sx={{
							bgcolor: '#000000',
							borderRadius: '16px',
							paddingX: '24px',
						}}
					/>
				</Box>
				<Stack
					alignItems={'center'}
					direction={'row'}
					paddingY={'12px'}
					paddingX={'24px'}
					spacing={'24px'}
					bgcolor={'#000000'}
					borderRadius={'16px'}
					divider={
						<Divider
							orientation='vertical'
							flexItem
							sx={{
								backgroundColor: '#FFFFFF',
								margin: 0,
								padding: 0,
							}}
						/>
					}
				>
					<IconNotification
						width='20'
						height='20'
						color='#FFFFFF'
					/>
					<Stack
						direction={'row'}
						spacing={'8px'}
						alignItems={'center'}
					>
						<Typography>0.2141</Typography>
						<IconETH />
					</Stack>
					{renderButton}
				</Stack>
			</Stack>

			{/* Content */}
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
		</Stack>
	);
}
