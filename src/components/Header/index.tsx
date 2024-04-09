'use client';
import Logo from '@/assets/icons/Logo';
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Stack } from '@mui/material';
import { IconList } from '@/assets/icons';
import SidebarMobile from '../SidebarMobile';
import { LIST_MENU } from '@/constant';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

	const { setVisible: setModalVisible } = useWalletModal();
	const {
		buttonState,
		onConnect,
		onDisconnect,
		publicKey,
		walletIcon,
		walletName,
	} = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	const handleCloseSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<Sectionheader>
			<StackCustom direction={'row'}>
			<Link href='/'>
						<Logo />
					</Link>
				<MenuCustom>
					
					<Stack
						direction={'row'}
						sx={{ alignItems: 'center' }}
						spacing={5}
					>
						{LIST_MENU.map((item, index) => (
							<Link
								href={item.url}
								key={index}
							>
								<MenuItem key={index}>{item.title}</MenuItem>
							</Link>
						))}
					</Stack>
				</MenuCustom>
				<ListButton onClick={handleShowSidebar}>
					<IconList />
				</ListButton>
				<ButtonJoin onClick={() => setModalVisible(true)}>
					Join waitlist
				</ButtonJoin>

				<SidebarMobile
					handleClose={handleCloseSidebar}
					showSidebar={showSidebar}
				/>
			</StackCustom>
		</Sectionheader>
	);
}

const Sectionheader = styled.div`
	display: flex;
	@media (max-width: 768px) {
		border: none;
		
	}
	
	border: 1px solid #B47AFF;
	border-top: none;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;

	justify-content: space-between;
	padding: 24px;
	@media (max-width: 768px) {
		padding: 0;
	}
	max-width: 1440px;
	margin: auto;
`;
const StackCustom = styled(Stack)`
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 768px) {
		padding: 20px;
	}
	@media (max-width: 1024px) {
		gap: 26px;
		flex-wrap: wrap;
	}
`;

const MenuCustom = styled(Stack)`

	flex-direction: row;
	gap: 26px;
	@media (max-width: 1024px) {
		gap: 26px;
		flex-wrap: wrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const MenuItem = styled(Button)<any>`
	color: ${(props) => (props.active ? '#9945ff' : '#fff')};
	text-transform: uppercase;
`;

const ButtonJoin = styled(Button)`
	background-color: #9945ff;
	color: #fff;
	padding: 12px 24px;
	border-radius: 8px;
	border: none;
	text-transform: capitalize;
	height: 45px;
	@media (max-width: 768px) {
		display: none;
	}
	&:hover {
		opacity: 0.5;
		background-color: #9945ff !important;
	}
`;

const ListButton = styled(Button)`
	@media (min-width: 768px) {
		display: none;
	}
`;
