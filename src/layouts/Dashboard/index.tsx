'use client';
import * as React from 'react';
import styled from 'styled-components';
import imageBg from '@/assets/images/Premark.png';
import Sidebar from '@/components/Sidebar';
import HeaderV2 from '@/components/HeaderV2';
import { Box } from '@mui/material';

export interface ILayoutProviderProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: ILayoutProviderProps) {
	return (
		<LayoutWrapper>
			<Sidebar />
			<Box
				position={'relative'}
				marginLeft={'240px'}
				width={'100%'}
				paddingX={'32px'}
				paddingY={'16px'}
			>
				<HeaderV2 />
				<Box marginTop={'100px'}>{children}</Box>
			</Box>
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
