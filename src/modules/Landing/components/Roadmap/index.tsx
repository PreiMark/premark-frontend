import * as React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import styled from "styled-components";
import { LINK_VIDEO_PRODUCTION } from "@/constant";
import timeline from "@/assets/images/timeline.png";
import roadmap from "@/assets/images/roadmap.png";

export interface IRoadmapProps {}

export default function Roadmap(props: IRoadmapProps) {
  return (
    <Container>
      <ContentLeft>
        <ImgCustom>
          <ImageRoalmap>
            <Image
              src={roadmap.src}
              // width={564}
              // height={1002}
              alt="roadmap_premark"
              layout="fill"
            />
          </ImageRoalmap>
          <Content>
            <PreMark>premark</PreMark>
            <Title>Roadmap</Title>
          </Content>
        </ImgCustom>
      </ContentLeft>
      <ContentRight>
        <Image
          src={timeline.src}
          // width={784}
          // height={736}
          alt="timeline_premark"
          layout="fill"
        />
      </ContentRight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  position: relative;
  margin-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;
const ContentLeft = styled.div`
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ImgCustom = styled.div`
  position: relative;
`;

const ImageRoalmap = styled.div`
  width: 564px;
  height: 1002px;
  @media (max-width: 1024px) {
    width: 764px;
    height: 1002px;
  }
  @media (max-width: 768px) {
    width: 464px;
    height: 502px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19%;
  left: 12%;
  @media (max-width: 768px) {
    top: 13%;
    left: 18%;
  }
  @media (max-width: 420px) {
    top: -4%;
    left: 18%;
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  left: 38%;
  width: 784px;
  height: 736px;
  @media (max-width: 1024px) {
    position: relative;
    left: 0;
    margin: auto;
    width: 884px;
    height: 836px;
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    margin: auto;
    width: 300px;
    height: 336px;
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
