import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import protect from "@/assets/images/protect.svg";

export interface IProtectYourPositionProps {}

export default function ProtectYourPosition(props: IProtectYourPositionProps) {
  return (
    <Container>
      <ImgCustom>
        <Content>
          <PreMark>premark</PreMark>
          <Title>Secure Your Transaction</Title>
        </Content>
        <BackGround>
          <Image
            src={protect.src}
            // width={1440}
            // height={783}
            alt="protect_premark"
            layout="fill"
          />
        </BackGround>
      </ImgCustom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  left: 34.5%;
  top: 7%;
  @media (max-width: 1024px) {
    left: 25.5%;
  }
  @media (max-width: 768px) {
    top: 0;
    left: 14.5%;
  }
`;

const BackGround = styled.div`
  width: 1440px;
  height: 783px;
  @media (max-width: 1024px) {
    width: 940px;
    height: 683px;
  }
  @media (max-width: 768px) {
    width: 440px;
    height: 300px;
  }
`;

const ImgCustom = styled.div`
  position: relative;
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
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
