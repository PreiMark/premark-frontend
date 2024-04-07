import * as React from "react";
import styled from "styled-components";
import { LINK_VIDEO_DONORS } from "@/constant";
export interface IDonorsProps {}
import donors from "@/assets/images/donors.png";
import Image from "next/image";
import { IconInova, IconPos } from "@/assets/icons";
import { Box } from "@mui/material";


export default function Donors(props: IDonorsProps) {
  return (
    <Container>
      <Box
      position={'absolute'}
    
      >
      <ContentRight>
        <PreMark>premark</PreMark>
        <Title>Search - Buy - Secure</Title>
        <Title>Access Early Opportunities At Ease</Title>
      </ContentRight>
      <br/>
      <ImageDonors>
        <IconInova />
        <IconPos />
      </ImageDonors>
      </Box>
      
      <video
        style={{ borderRadius: "16px" }}
        width={471}
        height={532}
        src={LINK_VIDEO_DONORS}
        muted
        autoPlay
        loop
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
width: 100%;
margin-bottom: 80px;
 
  background-image: url('/DonorBackgound.png');
  background-repeat: no-repeat;

  background-position: center;
  
`;
const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  
`;

const ImageDonors = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 1118px;
  /* margin-top: -50px; */

  @media (max-width: 1024px) {
    margin: auto;
    width: 868px;
    height: 250px;
  }
  @media (max-width: 768px) {
    margin: auto;
    width: 330px;
    height: 150px;
  }
  @media (max-width: 420px) {
    width: 350px;
    height: 145px;
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
  text-transform: uppercase;
  font-size: 18px;
  color: #C99EFF;
  background: linear-gradient(161.81deg, #010214 14.93%, #BEA6FF 369.16%);
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  line-height: 54px;
  color: #fff;
  align-items: center;
  @media (max-width: 420px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
