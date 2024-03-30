"use client";
import Header from "@/components/Header";
import * as React from "react";
import styled from "styled-components";
import imageBg from "@/assets/images/Premark.png";

export interface ILayoutProviderProps {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: ILayoutProviderProps) {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        {children}
      </Container>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  background-image: url(${imageBg.src});
  min-height: 10000000px;
`;
const Container = styled.div`
  max-width: 1400px;
  padding: 24px;
  margin: auto;
`;
