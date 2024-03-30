import * as React from "react";
import styled from "styled-components";
import { LINK_VIDEO_DONORS } from "@/constant";
export interface IDonorsProps { }
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
      <Image src={donors.src} width={1118} height={210} alt="donors_premark" />
      <video style={{ borderRadius: "16px" }} width={491} height={532} src={LINK_VIDEO_DONORS} muted autoPlay loop />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 40px;
`
const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`
const PreMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 34px;
  border-radius: 100px;
  padding: 8px 16px;
  color: linear-gradient(272.65deg, #9747FF 26.52%, #08E5B2 100%);
  text-transform: uppercase;
  font-size: 18px;
  background: linear-gradient(272.65deg, #9747FF 26.52%, #08E5B2 100%, rgba(1, 2, 20, 1), rgba(190, 166, 255, 1));

`
const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  line-height: 54px;
  color: #FFF;
`
