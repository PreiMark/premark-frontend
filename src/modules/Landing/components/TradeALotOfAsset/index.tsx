import * as React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { LINK_VIDEO_PRODUCTION } from '@/constant';
export interface ITradeALotOfAssetProps {}

export default function TradeALotOfAsset(props: ITradeALotOfAssetProps) {
	return (
		<Container>
			<video
				style={{ borderRadius: '16px' }}
				width={500}
				height={552}
				src={LINK_VIDEO_PRODUCTION}
				muted
				autoPlay
				loop
			/>
			<ContentRight>
				<PreMark>premark</PreMark>
				<Title>Trade ALot Of Asset</Title>
				<Description>
					Pre-listing allocation, NFT whitelist, rewardings point,...
				</Description>
				<ButtonJoin variant='contained'>Join Waitlist</ButtonJoin>
			</ContentRight>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
	margin-top: 40px;
`;
const ContentRight = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
const PreMark = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 124px;
	height: 34px;
	border-radius: 100px;
	padding: 8px 16px;
	color: linear-gradient(272.65deg, #9747ff 26.52%, #08e5b2 100%);
	text-transform: uppercase;
	font-size: 18px;
	background: linear-gradient(
		272.65deg,
		#9747ff 26.52%,
		#08e5b2 100%,
		rgba(1, 2, 20, 1),
		rgba(190, 166, 255, 1)
	);
`;
const Title = styled.div`
	font-size: 45px;
	font-weight: 700;
	line-height: 54px;
	color: #fff;
`;
const Description = styled.div`
	color: rgba(156, 163, 175, 1);
`;
const ButtonJoin = styled(Button)`
	width: 181px;
	height: 56px;
	border-radius: 12px;
	background: linear-gradient(
		95.2deg,
		#ffb8fc -4.81%,
		#e1baff 42.66%,
		#9339da 100%
	);
	padding: 16px 32px;
	color: #000;
	font-weight: 600;
	&:hover {
		background-color: #e3e3e3;
	}
`;
