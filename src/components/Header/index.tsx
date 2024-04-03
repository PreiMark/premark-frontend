"use client";
import Logo from "@/assets/icons/Logo";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button, Stack } from "@mui/material";
import { IconList } from "@/assets/icons";
import SidebarMobile from "../SidebarMobile";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [ShowSidebar, setShowSidebar] = React.useState<boolean>(false);

  const LIST_MENU = [
    { title: "About", url: "/" },
    { title: "Feature", url: "/" },
    { title: "Roadmap", url: "/" },
  ];
  const handleShowSidebar = () => {
    setShowSidebar(!ShowSidebar);
  };
  const handleCloseSidebar = () => {
    setShowSidebar(!ShowSidebar);
  };

  return (
    <Sectionheader>
      <StackCustom direction={"row"}>
        <MenuCustom>
          <Link href="/">
            <Logo />
          </Link>
          <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={5}>
            {LIST_MENU.map((item, index) => (
              <Link href={item.url} key={index}>
                <MenuItem key={index}>{item.title}</MenuItem>
              </Link>
            ))}
          </Stack>
        </MenuCustom>
        <ListButton onClick={handleShowSidebar}>
          <IconList />
        </ListButton>
        <ButtonJoin>Join waitlist</ButtonJoin>

        <SidebarMobile
          handleClose={handleCloseSidebar}
          ShowSidebar={ShowSidebar}
        />
      </StackCustom>
    </Sectionheader>
  );
}

const Sectionheader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const StackCustom = styled(Stack)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    gap: 26px;
    flex-wrap: wrap;
  }
`;

const MenuCustom = styled(Stack)`
  flex-direction: row;
  gap: 26px;
  @media (max-width: 1024px) {
    gap: 26px;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Button)<any>`
  color: ${(props) => (props.active ? "#9945ff" : "#fff")};
  text-transform: capitalize;
`;

const ButtonJoin = styled(Button)`
  background-color: #9945ff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  text-transform: capitalize;
  height: 45px;
  &:hover {
    opacity: 0.5;
    background-color: #9945ff !important;
  }
`;

const ListButton = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`;
