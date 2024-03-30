"use client";
import * as React from "react";
import Banner from "../components/Banner";
import TradeALotOfAsset from "../components/TradeALotOfAsset";
import ProtectYourPosition from "../components/ProtectYourPosition";
import Donors from "../components/Donors";
import Roadmap from "../components/Roadmap";

export interface ILandingPageProps { }

export default function LandingPage(props: ILandingPageProps) {
  return (
    <>
      <Banner />
      <TradeALotOfAsset />
      <ProtectYourPosition />
      <Roadmap />
      <Donors />
    </>
  );
}
