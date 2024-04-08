'use client';
import Header from '@/components/Header';
import * as React from 'react';
import styled from 'styled-components';
import imageBg from '@/assets/images/BackgroundLanding.png';
import Footer from '@/components/Footer';

export interface ILayoutProviderProps {
	children: React.ReactNode;
}

export default function BaseLayout({ children }: ILayoutProviderProps) {
	return (
		<LayoutWrapper>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</LayoutWrapper>
	);
}

const LayoutWrapper = styled.div`
	background-image: url(${imageBg.src});
	background-repeat: no-repeat;
	background-size: cover;
	image-rendering: pixelated;
	min-height: 100vh;
`;
const Container = styled.div`
	max-width: 1440px;
	padding: 24px;
	margin: auto;
`;
