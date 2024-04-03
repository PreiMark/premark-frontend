"use client";

import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import OrderCard from "../components/OrderCard";
import useMarket from "../hooks/useMarket";

export default function MarketPage() {
  const { listOffer } = useMarket();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"} width={"100%"}>
      <Navbar />
      <Banner />
      <Grid container spacing={"1rem"} paddingY={"2rem"}>
        <Grid item xs={12} md={6} xl={4}>
          <OrderCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <OrderCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <OrderCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <OrderCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <OrderCard />
        </Grid>
      </Grid>
    </Box>
  );
}
