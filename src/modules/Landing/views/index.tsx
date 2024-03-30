"use client";
import * as React from "react";
import Banner from "../components/Banner";
import TradeALotOfAsset from "../components/TradeALotOfAsset";

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
  return (
    <>
      <Banner />
      <TradeALotOfAsset />
    </>
  );
}
