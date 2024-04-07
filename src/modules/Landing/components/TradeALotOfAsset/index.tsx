import * as React from "react";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { LINK_VIDEO_PRODUCT, LINK_VIDEO_PRODUCTION } from "@/constant";
export interface ITradeALotOfAssetProps {}

export default function TradeALotOfAsset(props: ITradeALotOfAssetProps) {
  return (
    <Container>
      <video
        style={{ borderRadius: "16px" }}
        width={2200}
        height={1700}
        src={LINK_VIDEO_PRODUCT}
        muted
        autoPlay
        loop
      />
      <ContentRight>
        <PreMark>premark</PreMark>
        <Title>Multiple Assets, One Space</Title>
        <Description>
          Pre-listing allocation, NFT whitelist, rewardings point,...
        </Description>
        <br/>
        <ButtonJoin variant="contained">Join Waitlist</ButtonJoin>
      </ContentRight>
    </Container>
  );
}

const Container = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 40px;
  @media (max-width: 1024px) {
    gap: 26px;
  }
  @media (max-width: 768px) {
    gap: 26px;
    flex-direction: column-reverse;
  }
`;
const ContentRight = styled.div`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const PreMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 34px;
  border-radius: 100px;
  padding: 8px 16px;
 
  color: #C99EFF;
  background: linear-gradient(161.81deg, #010214 14.93%, #BEA6FF 369.16%);

  text-transform: uppercase;
  font-size: 18px;
  
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
