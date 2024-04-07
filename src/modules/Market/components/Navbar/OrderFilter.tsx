import { Button, ButtonGroup } from '@mui/material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Key, useCallback, useEffect, useState } from 'react';

const orderList = ['Buy', 'Sell', 'Full', 'Close'];

export default function OrderFilter() {
	const [crrOrder, setCrrOrder] = useState<string>(orderList[0]);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const search = searchParams.get('offerType') ?? 'Buy';

	useEffect(() => {
		setCrrOrder(search);
	}, [search]);

	const selectOrder = useCallback(
		(value: string) => {
			router.push(`${pathname}?offerType=${value}`);
			setCrrOrder(value);
		},
		[pathname, router],
	);

	const renderOrderLabel = (label: string) => {
		switch (label) {
			case 'Buy':
				return 'Buy';
			case 'Sell':
				return 'Sell';
			case 'Full':
				return '100% Filled';
			case 'Close':
				return 'Closed';
			default:
				return 'Closed';
		}
	};

	return (
		<ButtonGroup
			variant='outlined'
			color='secondary'
			aria-label='order filter button group'
		>
			{orderList.map((label: string, key: Key) => (
				<Button
					variant={label === crrOrder ? 'contained' : 'outlined'}
					key={key}
					color={label === crrOrder ? 'secondary' : 'info'}
					onClick={() => selectOrder(label)}
					sx={{ px: '24px', py: '16px', whiteSpace: 'nowrap' }}
				>
					{renderOrderLabel(label)}
				</Button>
			))}
		</ButtonGroup>
	);
}
