import { IconClose } from '@/assets/icons';
import React from 'react';
import styled from 'styled-components';
interface IPropsSidebar {
	handleClose: () => void;
	showSidebar: boolean;
}
interface IPropSidebarWrapper {
	showSidebar: boolean;
}
export default function SidebarMobile({
	handleClose,
	showSidebar,
}: IPropsSidebar) {
	return (
		<SidebarWrapper showSidebar={showSidebar}>
			<IconWrapper onClick={handleClose}>
				<IconClose />
			</IconWrapper>
			<SidebarList>
				<SidebarItem>About</SidebarItem>
				<SidebarItem>Feature</SidebarItem>
				<SidebarItem>Roadmap</SidebarItem>
			</SidebarList>
		</SidebarWrapper>
	);
}

const SidebarWrapper = styled.div<IPropSidebarWrapper>`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 100;
	background: #000001;
	width: 250px;
	padding: 40px;
	transition: all 0.5s;
	transform: ${(props) =>
		props.showSidebar ? 'translateX(0%)' : 'translateX(-120%)'};

	@media (min-width: 768px) {
		display: none;
	}
`;
const SidebarList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	color: #fff;
`;
const SidebarItem = styled.li`
	list-style: none;
	cursor: pointer;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	color: #fff;
`;
