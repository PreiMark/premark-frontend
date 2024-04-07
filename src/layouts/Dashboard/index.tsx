'use client';
import * as React from 'react';
import styled from 'styled-components';
import imageBg from '@/assets/images/Premark.png';
import Sidebar from '@/components/Sidebar';

export interface ILayoutProviderProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: ILayoutProviderProps) {
	return (
		<LayoutWrapper>
			<Sidebar />
			<Container>{children}</Container>
		</LayoutWrapper>
	);
}

const LayoutWrapper = styled.div`
	background-image: url(${imageBg.src});
	background-repeat: no-repeat;
	background-size: cover;
	image-rendering: pixelated;
	display: flex;
	min-height: 100vh;
`;
const Container = styled.div`
	padding: 20px 36px;
	width: 100%;
	margin-left: 240px;
`;
