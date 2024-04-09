import IconSolana from '@/assets/icons/IconSolana';
import { OrderType } from '@/modules/Dashboard/components/MarketList';
import {
	Box,
	MenuItem,
	Radio,
	Select,
	SelectChangeEvent,
	Typography,
} from '@mui/material';
import { ChangeEvent, Key, useMemo } from 'react';
import { ORDER_NETWORK_LIST } from '@/constant';
import IconETH from '@/assets/icons/IconETH';

interface NetworkAndTypeStepProps {
	orderType: OrderType;
	network: string;
	setOrderType: (type: OrderType) => void;
	setNetwork: (network: string) => void;
}

export default function NetworkAndTypeStep({
	orderType,
	network,
	setNetwork,
	setOrderType,
}: NetworkAndTypeStepProps) {
	const handleOrderChange = (event: ChangeEvent<HTMLInputElement>) => {
		setOrderType(event.target.value as OrderType);
	};

	const handleNetworkChange = (event: SelectChangeEvent) => {
		setNetwork(event.target.value as string);
	};

	const renderIcon = (value: string) => {
		switch (value) {
			case 'SOLANA':
				return (
					<Box
						width={'24px'}
						height={'24px'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						borderRadius={'100%'}
					>
						<IconSolana />
					</Box>
				);
			case 'ETHEREUM':
				return (
					<Box
						width={'24px'}
						height={'24px'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						borderRadius={'100%'}
						bgcolor={'#FFF'}
					>
						<IconETH />
					</Box>
				);
			default:
				break;
		}
	};

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={'1.5rem'}
		>
			<Box
				display={'flex'}
				flexDirection={'column'}
				gap={'1rem'}
			>
				<Typography
					fontSize={'1rem'}
					fontWeight={600}
					lineHeight={'1.5rem'}
				>
					Network
				</Typography>
				<Select
					color='secondary'
					value={network}
					onChange={handleNetworkChange}
					sx={{
						border: '1px solid #6E727D',
						borderRadius: '0.5rem',
						height: 'min-content',
						fontSize: '14px',
						lineHeight: '20px',
					}}
				>
					{ORDER_NETWORK_LIST.map(
						(orderNetwork: string, key: Key) => (
							<MenuItem
								value={orderNetwork}
								key={key}
								sx={{
									height: 'min-content',
									fontSize: '14px',
									lineHeight: '20px',
								}}
							>
								<Box
									display={'flex'}
									gap={'8px'}
									alignItems={'center'}
								>
									{renderIcon(orderNetwork)}
									<Typography
										fontSize={'0.875rem'}
										fontWeight={600}
										lineHeight={'1.25rem'}
										textTransform={'capitalize'}
									>
										{orderNetwork}
									</Typography>
								</Box>
							</MenuItem>
						),
					)}
				</Select>
			</Box>
			<Box
				display={'flex'}
				gap={'0.75rem'}
			>
				<Box
					display={'flex'}
					alignItems={'flex-start'}
				>
					<Radio
						checked={orderType === 'Buy'}
						onChange={handleOrderChange}
						value='Buy'
						name='order-action'
						color='secondary'
						inputProps={{ 'aria-label': 'A' }}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'0.25rem'}
				>
					<Typography
						fontWeight={600}
						lineHeight={'1.5rem'}
					>
						Buying
					</Typography>
					<Typography
						fontSize={'0.875rem'}
						color={'#6E727D'}
					>
						You want to buy points
					</Typography>
				</Box>
			</Box>
			<Box
				display={'flex'}
				gap={'0.75rem'}
			>
				<Box
					display={'flex'}
					alignItems={'flex-start'}
				>
					<Radio
						checked={orderType === 'Sell'}
						onChange={handleOrderChange}
						value='Sell'
						name='order-action'
						color='secondary'
						inputProps={{ 'aria-label': 'B' }}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'0.25rem'}
				>
					<Typography
						fontWeight={600}
						lineHeight={'1.5rem'}
					>
						Selling
					</Typography>
					<Typography
						fontSize={'0.875rem'}
						color={'#6E727D'}
					>
						You want to sell your points
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
