"use client";

import IconSol from "@/assets/icons/IconSol";
import axiosInstance from "@/config/axios.config";
import { SOL_WALLET } from "@/config/env.config";
import {
  ORDER_CURRENCY_LIST,
  ORDER_NETWORK_LIST,
  ORDER_PROTOCOL_LIST,
} from "@/constant";
import idl from "@/contract/abis/market.json";
import useProviderConnect from "@/hooks/useProviderConnect";
import { OrderType } from "@/modules/Dashboard/components/MarketList";
import { Box, Button } from "@mui/material";
import * as anchor from "@project-serum/anchor";
import { Address, utils, web3 } from "@project-serum/anchor";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import DetailSettingsStep from "../components/DetailSettingsStep";
import DoneStep from "../components/DoneStep";
import NetworkAndTypeStep from "../components/NetworkAndTypeStep";
import OrderStepper from "../components/OrderStepper";
import ReviewAndCreateStep from "../components/ReviewAndCreateStep";
import { InitializeOffer } from "@/types/network";
import {
  BID_MINT,
  BID_POINT,
  BID_TOTAL,
  PROGRAM_ACCOUNTS,
  RETAILER,
} from "@/utils/helper";

export interface IMarketPage {}

export default function OrderPage(props: IMarketPage) {
  const [crrStep, setCrrStep] = useState<number>(0);
  const [orderType, setOrderType] = useState<OrderType>("Buy");
  const [network, setNetwork] = useState<string>(ORDER_NETWORK_LIST[0]);
  const [currency, setCurrency] = useState<string>(ORDER_CURRENCY_LIST[0]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [protocol, setProtocol] = useState<string>(ORDER_PROTOCOL_LIST[0].name);

  const { getProvider } = useProviderConnect();
  const idlString = JSON.stringify(idl);
  const idlJson = JSON.parse(idlString);
  const programID = new PublicKey(SOL_WALLET ?? "");
  const provider = getProvider();
  const program = new anchor.Program(idlJson, programID, provider);
  const wallet = useWallet();

  const { setVisible: setModalVisible } = useWalletModal();
  const { publicKey } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  const router = useRouter();

  const deriveTreasurerAddress = async (ownerAddress: Address) => {
    if (typeof ownerAddress !== "string")
      ownerAddress = ownerAddress.toBase58();
    const ownerPubkey = new web3.PublicKey(ownerAddress);
    const [treasurer] = await web3.PublicKey.findProgramAddress(
      [Buffer.from("treasurer"), ownerPubkey.toBuffer()],
      program.programId
    );
    return treasurer;
  };

  const generateRetailerPDAs = async (params: {
    retailer: Address;
    bidMint: Address;
  }) => {
    const retailer = new web3.PublicKey(params.retailer);
    const bidMint = new web3.PublicKey(params.bidMint);

    const treasurer = await deriveTreasurerAddress(retailer);
    const bidTreasury = await utils.token.associatedAddress({
      mint: bidMint,
      owner: treasurer,
    });
    return {
      retailer,
      treasurer,
      bidMint,
      bidTreasury,
    };
  };

  const generateWalletPDAs = async (params: { bidMint: Address }) => {
    const authority: any = wallet.publicKey;
    const bidTokenAccount = await utils.token.associatedAddress({
      mint: params.bidMint as PublicKey,
      owner: authority,
    });
    return {
      authority,
      signer: wallet.publicKey,
      bidTokenAccount,
    };
  };

  const callInitOffer = async ({
    bidMint,
    bidTotal,
    bidPoint,
    sendAndConfirm = true,
    retailer = web3.Keypair.generate(),
  }: InitializeOffer) => {
    const {
      bidMint: _bidMint,
      bidTreasury,
      retailer: _retailer,
      treasurer,
    } = await generateRetailerPDAs({
      retailer: retailer.publicKey,
      bidMint,
    });

    const { bidTokenAccount, authority } = await generateWalletPDAs({
      bidMint,
    });

    const tx = await program.methods
      .initializeOffer(bidTotal, bidPoint)
      .accounts({
        bidMint: _bidMint,
        bidTokenAccount,
        authority: authority,
        retailer: _retailer,
        treasurer,
        bidTreasury,
        ...PROGRAM_ACCOUNTS,
      })
      .transaction();

    let txId = "";
    if (sendAndConfirm) {
      txId = await provider.sendAndConfirm(tx, [retailer]);
    }
    return { txId, tx };
  };

  const handleNextStep = useCallback(async () => {
    if (crrStep < 2) {
      setCrrStep((prevStep) => prevStep + 1);
      return;
    }
    if (crrStep < 3) {
      if (!publicKey) {
        setModalVisible(true);
      } else {
        const protocolId = ORDER_PROTOCOL_LIST.find(
          (item: { id: string; name: string }) => {
            if (item.name === protocol) return item.id;
          }
        );

        const submitData = {
          marketType: "Points",
          offerType: orderType,
          network: network,
          userId: publicKey.toBase58(),
          protocolId: protocolId,
          pointsAmount: totalPoints,
          currency: currency,
          currencyAmount: totalPrice,
        };
        console.log("🚀 ~ handleNextStep ~ submitData:", submitData);

        try {
          const res = await callInitOffer({
            bidTotal: new anchor.BN(totalPrice),
            bidPoint: new anchor.BN(totalPoints),
            retailer: RETAILER,
            sendAndConfirm: true,
            bidMint: BID_MINT,
          });
          console.log("🚀 ~ handleNextStep ~ res:", res);

          // const res = await axiosInstance.post("/offer/create", submitData);
          // if (res) {
          //   setCrrStep(3);
          // }
        } catch (error) {
          console.log(error);
        }
      }
      return;
    }
    if (crrStep === 3) {
      setCrrStep(0);
      setOrderType("Buy");
      setNetwork(ORDER_NETWORK_LIST[0]);
      setCurrency(ORDER_CURRENCY_LIST[0]);
      setTotalPoints(0);
      setTotalPrice(0);
      setProtocol(ORDER_PROTOCOL_LIST[0].name);
    }
  }, [
    crrStep,
    publicKey,
    setModalVisible,
    currency,
    network,
    orderType,
    protocol,
    totalPoints,
    totalPrice,
  ]);

  const handlePrevStep = useCallback(() => {
    if (crrStep === 3) {
      router.push("/dashboard");
    } else {
      setCrrStep((prevStep) => prevStep - 1);
    }
  }, [crrStep, router]);

  const renderCrrStep = useMemo(() => {
    switch (crrStep) {
      case 0:
        return (
          <NetworkAndTypeStep
            orderType={orderType}
            setOrderType={setOrderType}
            network={network}
            setNetwork={setNetwork}
          />
        );
      case 1:
        return (
          <DetailSettingsStep
            orderType={orderType}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalPoints={totalPoints}
            setTotalPoints={setTotalPoints}
            protocol={protocol}
            setProtocol={setProtocol}
            currency={currency}
            setCurrency={setCurrency}
          />
        );
      case 2:
        return (
          <ReviewAndCreateStep
            totalPoints={totalPoints}
            totalPrice={totalPrice}
            orderType={orderType}
            protocol={protocol}
            currency={currency}
          />
        );
      case 3:
        return <DoneStep />;
      default:
        break;
    }
  }, [
    crrStep,
    orderType,
    network,
    setNetwork,
    totalPrice,
    protocol,
    currency,
    totalPoints,
  ]);

  return (
    <GradientContainer>
      <OrderStepper activeStep={crrStep} />
      {renderCrrStep}
      <Box display={"flex"} gap={"1.5rem"}>
        {crrStep !== 0 && (
          <Button
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={handlePrevStep}
          >
            {crrStep < 3 ? "Back" : "Return Home"}
          </Button>
        )}
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleNextStep}
          endIcon={crrStep === 2 && <IconSol width="14" height="14" />}
        >
          {crrStep < 2
            ? "Next"
            : crrStep < 3
            ? `Deposit ${totalPrice}`
            : "Create Offer Again"}
        </Button>
      </Box>
    </GradientContainer>
  );
}

const GradientContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 170px auto;
  padding: 2rem;
  max-width: 694px;
  position: relative;
  border-radius: 27px;
  background: rgba(0, 0, 0, 0.85);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 3px;
    background: linear-gradient(to bottom right, #ffd2dd, #fc3b69);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
