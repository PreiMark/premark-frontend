import { Box, Button, Stack } from '@mui/material';
import NavButton from './NavButton';
import {
	IconAccount,
	IconCategory,
	IconCreateOrder,
	IconLogOut,
	IconSetting,
	Logo,
} from '@/assets/icons';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<Box
			height={'100vh'}
			bgcolor={'black'}
			padding={'12px'}
			display={'flex'}
			flexDirection={'column'}
			width={'240px'}
			position={'fixed'}
			top={0}
			left={0}
			gap={'16px'}
		>
			{/* Logo */}
			<Link href='/'>
				<Logo />
			</Link>

			{/* Navigation */}
			<Stack
				direction={'column'}
				spacing={'16px'}
				flexGrow={1}
			>
				<NavButton
					icon={
						<IconCategory
							width='24'
							height='24'
							color={
								pathname === '/dashboard'
									? '#FC3B69'
									: '#B2B2B2'
							}
						/>
					}
					title='Dashboard'
					isActive={pathname === '/dashboard'}
					onClick={() => router.push('/dashboard')}
				/>
				<NavButton
					icon={
						<IconCreateOrder
							width='24'
							height='24'
							color={
								pathname === '/order' ? '#FC3B69' : '#B2B2B2'
							}
						/>
					}
					title='Create Order'
					isActive={pathname === '/order'}
					onClick={() => router.push('/order')}
				/>
				<NavButton
					icon={
						<IconAccount
							width='24'
							height='24'
							color={
								pathname === '/account' ? '#FC3B69' : '#B2B2B2'
							}
						/>
					}
					title='My Account'
					isActive={pathname === '/account'}
					onClick={() => router.push('/account')}
				/>
				<NavButton
					icon={
						<IconSetting
							width='24'
							height='24'
							color={
								pathname === '/settings' ? '#FC3B69' : '#B2B2B2'
							}
						/>
					}
					title='Settings'
					isActive={pathname === '/settings'}
					onClick={() => router.push('/settings')}
				/>
			</Stack>

			{/* Logout */}
			<Button
				startIcon={
					<IconLogOut
						width='24'
						height='24'
						color='#FFFFFF'
					/>
				}
				color='info'
				variant='contained'
				sx={{
					justifyContent: 'flex-start',
				}}
			>
				Logout
			</Button>
		</Box>
	);
}
