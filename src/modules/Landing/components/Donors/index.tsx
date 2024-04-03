import * as React from "react";
import styled from "styled-components";
import { LINK_VIDEO_DONORS } from "@/constant";
export interface IDonorsProps {}
import donors from "@/assets/images/donors.png";
import Image from "next/image";

export default function Donors(props: IDonorsProps) {
  return (
    <Container>
      <ContentRight>
        <PreMark>premark</PreMark>
        <Title>Collaborate, Innovate</Title>
        <Title>Succeed: Bringing Ideas to Life</Title>
      </ContentRight>
      <ImageDonors>
        <Image
          src={donors.src}
          // width={1118}
          // height={210}
          alt="donors_premark"
          layout="fill"
        />
      </ImageDonors>
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
  @media (max-width: 768px) {
    margin-top: 450px;
  }
`;
const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const ImageDonors = styled.div`
  position: relative;
  width: 1118px;
  height: 210px;
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
  align-items: center;
  @media (max-width: 420px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
