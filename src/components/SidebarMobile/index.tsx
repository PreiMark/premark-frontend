import { IconClose } from "@/assets/icons";
import { transform } from "next/dist/build/swc";
import React, { useState } from "react";
import styled from "styled-components";
interface IPropsSidebar {
  handleClose: () => void;
  ShowSidebar: boolean;
}
interface IPropSidebarWrapper {
  ShowSidebar: boolean;
}
export default function SidebarMobile({
  handleClose,
  ShowSidebar,
}: IPropsSidebar) {
  return (
    <SidebarWrapper ShowSidebar={ShowSidebar}>
      <IconWrapper onClick={handleClose}>
        <IconClose />
      </IconWrapper>
      <SidebarList>
        <SidebarItem>About</SidebarItem>
        <SidebarItem>Feature</SidebarItem>
        <SidebarItem>Roadmap</SidebarItem>
      </SidebarList>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div<IPropSidebarWrapper>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background: #000001;
  width: 250px;
  padding: 40px;
  transition: all 0.5s;
  transform: ${(props) =>
    props.ShowSidebar ? "translateX(0%)" : "translateX(-120%)"};

  @media (min-width: 768px) {
    display: none;
  }
`;
const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
`;
const SidebarItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
`;
