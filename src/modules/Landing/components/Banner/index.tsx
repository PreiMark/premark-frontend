import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import Wormhole from "@/assets/images/wormhole.svg";
import Solona from "@/assets/images/solana.svg";

import hero from "@/assets/images/hero.png";
import theme from "@/styles/theme";
export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  return (

    <Box
    sx={{
			[theme.breakpoints.up('sm')]: {
				width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
			  },
		}}
    >
<StackBanner direction={"row"}>
      <CrossChain>
        <Typography 
        variant="h1" 
        sx={{ textTransform: 'uppercase'}}
        >Cross-chain pre market for points </Typography>
        <p>
          Built on:
          <Image src={Wormhole} alt="Wormhole" />
          <Image src={Solona} alt="Solona" />
        </p>
        <ButtonJoin variant="contained">Join Waitlist</ButtonJoin>
      </CrossChain>
      <BackGround>
      <Image src={hero} style={{
        width:"100%",
        height:"100%"
      }} alt="hero_premark"
      
      
      />
      </BackGround>
    
    </StackBanner>
    </Box>

   
    
  );
}

const BackGround = styled.div`
  width: 559px;
  height: 507px;

  @media (max-width: 768px) {
   padding: 20px;
   width: 429px;
  height: 407px;
  }
`;
const ButtonJoin = styled(Button)`
  width: 150px;
  height: 45px;
  border-radius: 12px;
  background-color: #ffff;
  color: #000;
  padding: 12px;
  font-weight: 600;
  /* text-transform: capitalize; */
  &:hover {
    background-color: #e3e3e3;
  }
`;

const StackBanner = styled(Stack)`
  justify-content: space-between;
  align-items: center;
  max-width: 1440px; 
  gap: 100px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    gap: 26px;
   padding: 20px;

    flex-direction: column;
  }
`;

const CrossChain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 585px;
  gap: 30px;
  h1 {
    font-size: 3.35vw;
    font-weight: 700;
    letter-spacing: -0.8px;
    color: #fff;
    background: linear-gradient(89.97deg, #f4e7ff 1.84%, #be8ae8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  p {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 45px;
    }
  }
`;
