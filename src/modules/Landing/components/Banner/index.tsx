import { Button, Stack } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import hero from "@/assets/images/hero.png";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  return (
    <StackBanner direction={"row"}>
      <CrossChain>
        <h1>Cross-chain pre market for points </h1>
        <p>Built on Wormwhole & Solana</p>
        <ButtonJoin variant="contained">Join Waitlist</ButtonJoin>
      </CrossChain>
      <Image src={hero.src} width={559} height={507} alt="hero_premark" />
    </StackBanner>
  );
}

const ButtonJoin = styled(Button)`
  width: 181px;
  height: 56px;
  border-radius: 12px;
  background-color: #ffff;
  color: #000;
  &:hover {
    background-color: #e3e3e3;
  }
`;

const StackBanner = styled(Stack)`
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 100px;
  margin-top: 40px;
`;

const CrossChain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 585px;
  gap: 30px;
  h1 {
    font-size: 64px;
    font-weight: 700;
    letter-spacing: -0.8px;
    color: #ffff;
  }
  p {
    color: #fff;
  }
`;
