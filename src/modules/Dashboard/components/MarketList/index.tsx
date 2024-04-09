"use client";

import { Box, Paper } from "@mui/material";
import MarketListMain from "./Main";
import MarketListHeader from "./Header";
import { useCallback, useEffect, useState } from "react";
import { MARKET_TYPE_LIST } from "@/constant";
import axiosInstance from "@/config/axios.config";

export type OrderType = "Buy" | "Sell";

export default function MarketList() {
  const [marketType, setMarketType] = useState<string>(MARKET_TYPE_LIST[0]);
  const [orderType, setOrderType] = useState<OrderType>("Buy");

  const [projectData, setProjectData] = useState<any[]>([]);

  const selectMarketType = useCallback((type: string) => {
    setMarketType(type);
  }, []);

  const selectOrderType = useCallback((type: OrderType) => {
    setOrderType(type);
  }, []);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await axiosInstance.get(
          `/offer/?offerType=${orderType === "Buy" ? "Sell" : "Buy"}`
        );
        setProjectData(res.data.data);
      } catch (err) {
        console.log("Failed to fetch data");
      }
    };
    fetchProjectData();
  }, [orderType]);

  return (
    <Paper>
      <Box
        padding={"32px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"16px"}
      >
        <MarketListHeader
          marketType={marketType}
          orderType={orderType}
          selectMarketType={selectMarketType}
          selectOrderType={selectOrderType}
        />
        <Box width={"100%"} border={"1px dashed rgba(255,255,255,0.4)"} />
        <MarketListMain projectData={projectData} />
      </Box>
    </Paper>
  );
}
