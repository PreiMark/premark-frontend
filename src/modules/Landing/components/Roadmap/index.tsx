import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import vector1 from "@/assets/images/Vector-6.svg";
import vector2 from "@/assets/images/Vector-7.svg";
import roadmap from "@/assets/images/roadmap.png";
import { IconCheck, VectorOne, VectorTwo } from "@/assets/icons";
import { Box } from "@mui/material";
import theme from "@/styles/theme";

export interface IRoadmapProps {}

export default function Roadmap(props: IRoadmapProps) {
  return (
    <Container>
      <ContentLeft>
        <ImgCustom>
          <ImageRoalmap>
            <Image src={roadmap.src} alt="roadmap_premark" layout="fill" />
          </ImageRoalmap>
          <Content>
            <PreMark>premark</PreMark>
            
            <Title>Roadmap</Title>
          </Content>
        </ImgCustom>
      </ContentLeft>
      <Box
      sx={{
        [theme.breakpoints.down('sm')]: {
         height: '120vh'
          },
      }}
      >
         <ContentRight>
        <TimeLineWrapper>
          <TimeLineCustom>
            <Time>
              <VectorCustom className="vector-1">
                <VectorOne />
              </VectorCustom>
              <TimeText>Apr/2024</TimeText>
              <VectorCustom className="vector-2">
                <VectorTwo />
              </VectorCustom>
            </Time>
            <Line></Line>
          </TimeLineCustom>
          <TimeLineCustom>
            <Time>
              <VectorCustom className="vector-1">
                <VectorOne />
              </VectorCustom>
              <TimeText>Jun/2024</TimeText>
              <VectorCustom className="vector-2">
                <VectorTwo />
              </VectorCustom>
            </Time>
            <Line></Line>
          </TimeLineCustom>
          <TimeLineCustom>
            <Time>
              <VectorCustom className="vector-1">
                <VectorOne />
              </VectorCustom>
              <TimeText>Sep/2024</TimeText>
              <VectorCustom className="vector-2">
                <VectorTwo />
              </VectorCustom>
            </Time>
            <Line></Line>
          </TimeLineCustom>
        </TimeLineWrapper>
        <Launch>
          <LaunchItem>
            <LaunchHeading>
              <IconCheck />
              Launch MVP
            </LaunchHeading>
            <LaunchList>
              <LaunchListItem>- Buy and Sell Points feature</LaunchListItem>
              <LaunchListItem>- Integrate Wormhole</LaunchListItem>
              <LaunchListItem>- Listing 10 SOL projects</LaunchListItem>
            </LaunchList>
          </LaunchItem>
          <LaunchItem>
            <LaunchHeading>
              <IconCheck />
              Launch MVP
            </LaunchHeading>
            <LaunchList>
              <LaunchListItem>- Staking feature</LaunchListItem>
              <LaunchListItem>- Launch community</LaunchListItem>
              <LaunchListItem>- Asia market development</LaunchListItem>
            </LaunchList>
          </LaunchItem>
          <LaunchItem>
            <LaunchHeading>
              <IconCheck />
              Launch MVP
            </LaunchHeading>
            <LaunchList>
              <LaunchListItem>- Bidding for points</LaunchListItem>
              <LaunchListItem>- NFT Market</LaunchListItem>
              <LaunchListItem>- Pre-TGE Market</LaunchListItem>
              <LaunchListItem>- OTC Market</LaunchListItem>
            </LaunchList>
          </LaunchItem>
        </Launch>
      </ContentRight>
      </Box>
     
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* align-items: flex-start; */
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ContentLeft = styled.div`
width: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: row-reverse; */
  }
`;

const ImgCustom = styled.div`
  position: relative;
`;

const ImageRoalmap = styled.div`
  width: 564px;
  height: 1002px;
  @media (max-width: 1024px) {
    width: 864px;
    height: 1002px;
  }
  @media (max-width: 768px) {
    width: 564px;
    height: 702px;
  }
  @media (max-width: 420px) {
    width: 364px;
    height: 502px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 32%;
  gap: 12px;
  @media (max-width: 768px) {
    top: 13%;
    left: 10%;
  }
  @media (max-width: 420px) {
    top: 13;
    left: 0;
  }
`;

const ContentRight = styled.div`
width: 70%;
padding-right: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  /* left: 38%; */
  width: 784px;
  height: 736px;
  @media (max-width: 1024px) {
    margin: auto;
    width: 884px;
    height: 836px;
    
  }
  @media (max-width: 768px) {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 336px;
    position: none;
padding-right: 0;

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
  @media (max-width: 420px) {
    font-size: 40px;
  }
`;

const TimeLineWrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  width: 30%;
  @media (max-width: 1024px) {
    /* gap: 20px; */
    gap: 220px;
  }
  @media (max-width: 768px) {
    gap: 200px;
    margin-top: 300px;
    margin-left: 220px;
  }
  @media (max-width: 420px) {
    gap: 200px;
    margin-top: 300px;
    margin-left: 250px;
  }
`;
const TimeLineCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Time = styled.div`
  position: relative;
  .vector-1 {
    top: -15px;
    left: -15px;
  }
  .vector-2 {
    bottom: -10px;
    right: 20px;
  }
`;
const VectorCustom = styled.span`
  position: absolute;
`;
const TimeText = styled.p`
  color: #fff;
  font-size: 14px;
  width: 110px;
`;
const Line = styled.div`
  width: 175px;
  height: 1px;
  background: #5b5959;
  @media (max-width: 1024px) {
    display: block;
    width: 205px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Launch = styled.div`
  min-width: 453px;
  height: 100%;
  border: 1px solid #5b5959;
  :last-child {
    border-bottom: none;
  }
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    border: none;
  }
`;
const LaunchItem = styled.div`
  padding: 50px 30px;
  border-bottom: 1px solid #5b5959;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 40px 20px;
    width: 250px;
  }
  @media (max-width: 420px) {
    width: 230px;
    align-items: flex-start;
  }
`;
const LaunchHeading = styled.h3`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
`;
const LaunchList = styled.ul`
  color: #918da4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-top: 20px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;

const LaunchListItem = styled.li`
  list-style: none;
`;
