import IconResetFilter from '@/assets/icons/IconResetFilter';
import {
	Box,
	Button,
	IconButton,
	InputLabel,
	Menu,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { Key, useState } from 'react';

const filterTypeList = ['Price: Ascending', 'Price: Descending'];

export default function SortFilter() {
	const [filterType, setFilterType] = useState<string>(filterTypeList[0]);

	const handleChange = (event: SelectChangeEvent) => {
		setFilterType(event.target.value as string);
	};

	return (
		<Box
			display={'flex'}
			gap={'0.5rem'}
			alignItems={'flex-start'}
		>
			<Box>
				<Select
					color='secondary'
					labelId='sort-filter'
					id='sort-filter'
					value={filterType}
					onChange={handleChange}
					sx={{
						border: '1px solid #6E727D',
						borderRadius: '0.5rem',
						height: 'min-content',
						fontSize: '14px',
						lineHeight: '20px',
					}}
				>
					{filterTypeList.map((filter: string, key: Key) => (
						<MenuItem
							value={filter}
							key={key}
							sx={{
								height: 'min-content',
								fontSize: '14px',
								lineHeight: '20px',
							}}
						>
							{filter}
						</MenuItem>
					))}
				</Select>
			</Box>
			<Box
				border={'1px solid #6E727D'}
				borderRadius={'8px'}
				padding={'8px'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				width={'56px'}
				height={'56px'}
				bgcolor={'transparent'}
				sx={{ cursor: 'pointer' }}
			>
				<IconResetFilter />
			</Box>
		</Box>
	);
}
