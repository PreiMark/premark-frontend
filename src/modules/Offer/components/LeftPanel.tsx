"use client";

import IconSol from "@/assets/icons/IconSol";
import CircularProgressWithLabel from "@/components/common/CircularProgressWithLabel";
import {
  Box,
  Button,
  Chip,
  OutlinedInput,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface LeftPanelProps {
  offerData: any;
}

export default function LeftPanel({ offerData }: LeftPanelProps) {
  const [amount, setAmount] = useState<number>();

  const validateNumber = (value: string) => {
    const numberRegex = /^\d+(\.\d+)?$/;
    return numberRegex.test(value);
  };

  const onAmountInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (validateNumber(newValue)) {
      setAmount(Number(newValue));
    }
  };

  const onAmountSliderChange = (event: Event, newValue: number | number[]) => {
    setAmount(newValue as number);
  };

  return (
    <Paper sx={{ flexGrow: 1, width: "100%" }}>
      <Stack
        direction={"column"}
        spacing={"16px"}
        paddingX={"32px"}
        paddingY={"40px"}
        width={"100%"}
        justifyContent={"center"}
      >
        {/* Header */}
        <Stack
          direction={"row"}
          spacing={"16px"}
          justifyContent={"space-between"}
        >
          {/* Protocol Avatar */}

          <Stack direction={"row"} spacing={"8px"}>
            <Image
              src={"/DEFAULT_IMAGE.png"}
              alt="protocol thumbnail"
              width={48}
              height={48}
            />
            {/* Protocol Info */}
            <Stack
              direction={"column"}
              spacing={"8px"}
              justifyContent={"center"}
            >
              <Typography
                fontWeight={600}
                fontSize={"20px"}
                lineHeight={"24px"}
              >
                {offerData?.protocolName}
              </Typography>
            </Stack>
          </Stack>
          <CircularProgressWithLabel
            value={offerData?.filledAmount * offerData?.pointsAmount}
            color="secondary"
            size={56}
            thickness={3}
            sx={{
              borderRadius: "100%",
              boxShadow: "inset 0 0 0 4px rgba(255, 255, 255, 0.20)",
            }}
          />

          {/* Filling Progress */}
        </Stack>

        {/*  */}
        <Stack
          direction={"column"}
          bgcolor={"#000"}
          borderRadius={"8px"}
          padding={"16px"}
          spacing={"16px"}
        >
          <Box>
            <Chip label={`${offerData?.offerType}ing`} color="secondary" />
          </Box>
          <Stack
            direction={"row"}
            spacing={"32px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <OutlinedInput
              fullWidth
              placeholder="Amount"
              value={amount}
              onChange={onAmountInputChange}
            />
            <Image
              src={"/DEFAULT_IMAGE.png"}
              alt="protocol thumbnail"
              width={32}
              height={32}
            />
          </Stack>
          <Stack direction={"row"} spacing={"16px"}>
            <Slider
              value={typeof amount === "number" ? amount : 0}
              onChange={onAmountSliderChange}
              min={0}
              defaultValue={0}
              max={offerData?.pointsAmount}
              color="secondary"
              size="medium"
            />
            <Box
              onClick={() => setAmount(offerData?.pointsAmount)}
              sx={{ cursor: "pointer" }}
            >
              <Chip label={"Max"} color="secondary" variant="outlined" />
            </Box>
          </Stack>
        </Stack>

        {/*  */}
        <Stack
          direction={"column"}
          bgcolor={"#000"}
          borderRadius={"8px"}
          padding={"16px"}
          spacing={"16px"}
        >
          <Typography>For</Typography>
          <Stack
            direction={"row"}
            spacing={"32px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <OutlinedInput
              fullWidth
              placeholder="Amount"
              value={offerData?.currencyAmount}
              disabled
            />
            <IconSol />
          </Stack>
          <Typography fontSize={"12px"} color={"#797D84"}>
            ${offerData?.priceUSD}
          </Typography>
        </Stack>

        {/*  */}
        <Box
          fontSize={"16px"}
          lineHeight={"20px"}
          color={"rgba(255,255,255,0.5)"}
        >
          User{" "}
          <Typography color={"#FFF"} component={"span"}>
            {offerData?.offerCreator.slice(0, 2) +
              ".." +
              offerData?.offerCreator.slice(-4)}
          </Typography>{" "}
          is{" "}
          <Typography
            color={offerData?.offerType === "Sell" ? "secondary" : "error"}
            component={"span"}
          >
            {offerData?.offerType === "Sell" ? "Buy" : "Sell"}ing
          </Typography>{" "}
          <Typography color={"#FFF"} component={"span"}>
            {amount} {offerData?.protocolName} points
          </Typography>{" "}
          for{" "}
          <Typography color={"#FFF"} component={"span"}>
            {offerData?.currencyAmount} SOL
          </Typography>
          . Do you want to buy
        </Box>

        {/*  */}
        <Button variant="contained" color="primary" size="large">
          Deposit {((amount as number) * offerData?.pricePerPoint).toFixed(4)}{" "}
          SOL
        </Button>

        {/*  */}
        <Box
          fontSize={"16px"}
          lineHeight={"20px"}
          color={"rgba(255,255,255,0.5)"}
        >
          <Typography
            color={offerData?.offerType === "Sell" ? "error" : "secondary"}
            component={"span"}
          >
            {offerData?.offerType}ing
          </Typography>{" "}
          {amount}{" "}
          <Typography color={"#FFF"} component={"span"}>
            {offerData?.protocolName} points
          </Typography>{" "}
          for{" "}
          <Typography color={"#FFF"} component={"span"}>
            {isNaN((amount as number) * offerData?.pricePerPoint)
              ? 0
              : ((amount as number) * offerData?.pricePerPoint).toFixed(4)}{" "}
            SOL
          </Typography>
          <br />
          You will automatically receive the{" "}
          <Typography color={"#FFF"} component={"span"}>
            equivalent amount of the protocol&apos;s tokens
          </Typography>{" "}
          based on the total points purchased after settlement.
        </Box>
      </Stack>
    </Paper>
  );
}
