import IconInovaz from '@/assets/icons/IconInovaz';
import IconSolana from '@/assets/icons/IconSolana';
import { ORDER_CURRENCY_LIST, ORDER_PROTOCOL_LIST } from '@/constant';
import { OrderType } from '@/modules/Dashboard/components/MarketList';
import { validateNumber } from '@/utils/validateNumber';
import {
	Box,
	Chip,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Stack,
	Typography,
} from '@mui/material';
import { ChangeEvent, Key, useMemo } from 'react';

interface DetailSettingsStepProps {
	orderType: OrderType;
	totalPrice: number;
	protocol: string;
	currency: string;
	totalPoints: number;
	setCurrency: (value: string) => void;
	setTotalPoints: (value: number) => void;
	setProtocol: (value: string) => void;
	setTotalPrice: (value: number) => void;
}

interface IOrderProtocol {
	id: string;
	name: string;
}

export default function DetailSettingsStep({
	orderType,
	totalPrice,
	totalPoints,
	currency,
	protocol,
	setCurrency,
	setTotalPrice,
	setProtocol,
	setTotalPoints,
}: DetailSettingsStepProps) {
	const onTotalPointsChange = (event: ChangeEvent<HTMLInputElement>) => {
		const point = event.target.value;
		if (validateNumber(point)) {
			if (Number(point) < 0) {
				return;
			} else {
				setTotalPoints(Number(point));
			}
		} else {
			setTotalPrice(0);
		}
	};

	const onTotalCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
		const point = event.target.value;
		if (validateNumber(point)) {
			if (Number(point) < 0) {
				return;
			} else {
				setTotalPrice(Number(point));
			}
		} else {
			setTotalPrice(0);
		}
	};

	const calculatePricePerPoint = useMemo(() => {
		if (!totalPoints || !totalPrice) return 0;
		return (totalPrice / totalPoints).toFixed(4);
	}, [totalPoints, totalPrice]);

	const handleProtocolChange = (event: SelectChangeEvent) => {
		setProtocol(event.target.value);
	};

	const handleCurrencyChange = (event: SelectChangeEvent) => {
		setCurrency(event.target.value);
	};

	return (
		<Stack
			direction={'column'}
			spacing={'32px'}
		>
			{/*  */}
			<Stack
				direction={'column'}
				spacing={'16px'}
				width={'100%'}
				bgcolor={'#000000'}
				padding={'16px'}
				borderRadius={'8px'}
			>
				<Chip
					label={orderType}
					color={orderType === 'Buy' ? 'primary' : 'secondary'}
					sx={{ width: 'max-content' }}
					size='small'
				/>
				<Stack
					direction={'row'}
					spacing={'32px'}
				>
					<OutlinedInput
						placeholder='Amount'
						onChange={onTotalPointsChange}
						color='primary'
						fullWidth
					/>
					<Select
						color='secondary'
						value={protocol}
						onChange={handleProtocolChange}
						sx={{
							bgcolor: 'rgba(255,255,255,0.1)',
							borderRadius: '0.5rem',
							height: 'min-content',
							fontSize: '14px',
							lineHeight: '20px',
						}}
					>
						{ORDER_PROTOCOL_LIST.map(
							(orderProtocol: IOrderProtocol, key: Key) => (
								<MenuItem
									value={orderProtocol.name}
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
										<Box
											width={'24px'}
											height={'24px'}
											display={'flex'}
											alignItems={'center'}
											justifyContent={'center'}
											borderRadius={'100%'}
										>
											<IconInovaz
												width='24'
												height='24'
												color='#0A0A0A'
											/>
										</Box>
										<Typography
											fontSize={'0.875rem'}
											fontWeight={600}
											lineHeight={'1.25rem'}
											textTransform={'capitalize'}
										>
											{orderProtocol.name}
										</Typography>
									</Box>
								</MenuItem>
							),
						)}
					</Select>
				</Stack>
				<Typography
					fontSize={'14px'}
					lineHeight={'20px'}
				>
					1 Point = {`$${calculatePricePerPoint}`}
				</Typography>
			</Stack>

			{/*  */}
			<Stack
				direction={'column'}
				spacing={'16px'}
				width={'100%'}
				bgcolor={'#000000'}
				padding={'16px'}
				borderRadius={'8px'}
			>
				<Chip
					label={'For'}
					color={'info'}
					sx={{ width: 'max-content' }}
					size='small'
				/>
				<Stack
					direction={'row'}
					spacing={'32px'}
				>
					<OutlinedInput
						placeholder='Amount'
						onChange={onTotalCurrencyChange}
						color='primary'
						fullWidth
					/>
					<Select
						color='secondary'
						value={currency}
						onChange={handleCurrencyChange}
						sx={{
							bgcolor: 'rgba(255,255,255,0.1)',
							borderRadius: '0.5rem',
							height: 'min-content',
							fontSize: '14px',
							lineHeight: '20px',
						}}
					>
						{ORDER_CURRENCY_LIST.map(
							(orderCurrency: string, key: Key) => (
								<MenuItem
									value={orderCurrency}
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
										<Typography
											fontSize={'0.875rem'}
											fontWeight={600}
											lineHeight={'1.25rem'}
											textTransform={'capitalize'}
										>
											{orderCurrency}
										</Typography>
									</Box>
								</MenuItem>
							),
						)}
					</Select>
				</Stack>
				<Typography
					fontSize={'14px'}
					lineHeight={'20px'}
				>
					{`$${totalPrice}`}
				</Typography>
			</Stack>
		</Stack>
	);
}
