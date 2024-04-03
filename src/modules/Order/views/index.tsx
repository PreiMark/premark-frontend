"use client";

import { Box, Button } from "@mui/material";
import styled from "styled-components";
import NetworkAndTypeStep from "../components/NetworkAndTypeStep";
import { useCallback, useMemo, useState } from "react";
import DetailSettingsStep from "../components/DetailSettingsStep";
import ReviewAndCreateStep from "../components/ReviewAndCreateStep";
import OrderStepper from "../components/OrderStepper";
import { useProvider } from "@/hooks/useProvider";

export interface IMarketPage {}

export default function OrderPage(props: IMarketPage) {
  const [crrStep, setCrrStep] = useState<number>(0);
  // const { open, setOpen } = useWalletDialog();

  const provider = useProvider();

  console.log("provider:", provider);

  const handleNextStep = useCallback(() => {
    setCrrStep((prevStep) => prevStep + 1);
  }, []);

  const handlePrevStep = useCallback(() => {
    setCrrStep((prevStep) => prevStep - 1);
  }, []);

  const renderCrrStep = useMemo(() => {
    switch (crrStep) {
      case 0:
        return <NetworkAndTypeStep />;
      case 1:
        return <DetailSettingsStep />;
      case 2:
        return <ReviewAndCreateStep />;
      default:
        break;
    }
  }, [crrStep]);

  return (
    <GradientContainer>
      <OrderStepper activeStep={crrStep} />
      {renderCrrStep}
      <Box display={"flex"} gap={"1.5rem"}>
        {crrStep !== 0 && (
          <Button
            color="info"
            variant="outlined"
            fullWidth
            onClick={handlePrevStep}
          >
            Back
          </Button>
        )}
        {crrStep !== 2 && (
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleNextStep}
          >
            Next
          </Button>
        )}
      </Box>
    </GradientContainer>
  );
}

const GradientBox = styled(Box)(() => ({
  display: "flex",
  margin: "170px auto",
  width: "100%",
  padding: "2rem",
  flexDirection: "column",
  gap: "1.5rem",
  maxWidth: "694px",
  borderRadius: "1.5rem",
  border: "10px solid transparent",
  borderImageSlice: 1,
  background: "linear-gradient(to bottom right, #9945ff, #08e5b2) border-box",
  WebkitBackgroundOrigin: "border-box",
  WebkitBackgroundClip: "content-box, border-box",
}));

const GradientContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 170px auto;
  padding: 2rem;
  max-width: 694px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(to bottom right, #9945ff, #08e5b2);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
