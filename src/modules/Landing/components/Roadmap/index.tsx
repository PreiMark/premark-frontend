import * as React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import styled from "styled-components";
import { LINK_VIDEO_PRODUCTION } from "@/constant";
import timeline from "@/assets/images/timeline.png";
import roadmap from "@/assets/images/roadmap.png";

export interface IRoadmapProps { }

export default function Roadmap(props: IRoadmapProps) {
    return (
        <Container>
            <ContentLeft>
                <ImgCustom>
                    <Image src={roadmap.src} width={564} height={1002} alt="roadmap_premark" />
                    <Content>
                        <PreMark>premark</PreMark>
                        <Title>Roadmap</Title>
                    </Content>
                </ImgCustom>
            </ContentLeft>
            <ContentRight>
                <Image src={timeline.src} width={784} height={736} alt="timeline_premark" />
            </ContentRight>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  position: relative;
  margin-top: 40px;


`
const ContentLeft = styled.div``
const ImgCustom = styled.div`
  position: relative;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19%;
  left: 12%;
`

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  left: 38%;
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
