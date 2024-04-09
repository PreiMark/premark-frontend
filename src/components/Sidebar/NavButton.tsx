import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface NavButtonProps extends ButtonProps {
	title: string;
	icon?: ReactNode;
	isActive: boolean;
}

export default function NavButton({
	title,
	icon,
	isActive,
	...rest
}: NavButtonProps) {
	return (
		<Button
			variant={isActive ? 'outlined' : 'text'}
			color={isActive ? 'primary' : 'info'}
			startIcon={icon}
			size='large'
			sx={{
				color: 'white',
				background: isActive
					? 'linear-gradient(to right bottom,#8B58585E, #2E0F0FA1)'
					: '',
				justifyContent: 'flex-start',
			}}
			{...rest}
		>
			{title}
		</Button>
	);
}
