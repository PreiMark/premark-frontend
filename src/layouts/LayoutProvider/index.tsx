"use client";
import Header from "@/components/Header";
import * as React from "react";
import styled from "styled-components";
import imageBg from "@/assets/images/Premark.png";
import Footer from "@/components/Footer";

export interface ILayoutProviderProps {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: ILayoutProviderProps) {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  background-image: url(${imageBg.src});
  background-repeat: no-repeat;
  background-size: cover;
  image-rendering: pixelated;
  min-height: 100vh;
`;
const Container = styled.div`
  max-width: 1400px;
  padding: 24px;
  margin: auto;
`;
