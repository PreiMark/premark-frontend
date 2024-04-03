import {
  IconDiscord,
  IconTelegram,
  IconTwiter,
  IconWeb,
  Logo,
} from "@/assets/icons";
import { FOOTER } from "@/constant";
import { Stack } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <>
      <SectionFooter>
        <Stack spacing={4}>
          <Logo />
          <p>Cross-chain pre market for points</p>
          <Stack direction={"row"}>
            <Link href={"/"}>
              <IconWeb />
            </Link>
            <Link
              href={"https://twitter.com/premark_HQ"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconTwiter />
            </Link>
            <IconDiscord />
            <IconTelegram />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          {FOOTER.map((item) => (
            <Stack key={item.menu} spacing={2}>
              <h2 className="menu">{item.menu}</h2>
              {item.subMenus.map((subMenu, index) => (
                <p className={"sub-menu"} key={index}>
                  {subMenu}
                </p>
              ))}
            </Stack>
          ))}
        </Stack>
      </SectionFooter>
      <BottomHeader>
        <p>© 2024 Premark Inc. All rights reserved.</p>
        <Stack direction={"row"} spacing={3}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </Stack>
      </BottomHeader>
    </>
  );
}

const SectionFooter = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  width: 100%;
  padding: 48px 64px 48px 24px;
  border-bottom: 1px solid #2e2e2e;
  p {
    color: #9ca3af;
  }
  .menu {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
  .sub-menu {
    font-size: 16px;
    font-weight: 500;
    color: #9ca3af;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 26px;
  }
`;

const BottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  p {
    color: #9ca3af;
  }
`;
