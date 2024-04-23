"use client";

import IconNotification from "@/assets/icons/IconNotification";
import IconSearch from "@/assets/icons/IconSearch";
import IconSol from "@/assets/icons/IconSol";
import useBalance from "@/hooks/useBalance";
import {
  Box,
  Button,
  Divider,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";

import WalletMenuButton from "./componets/WalletMenuButton";

export default function HeaderV2() {
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState, publicKey, walletIcon } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });

  const { balance } = useBalance();

  const renderButton = useMemo(() => {
    if (publicKey) {
   
      return (
      
        <WalletMenuButton/>
      );
    } else {
      switch (buttonState) {
        case "connecting":
          return (
            <Button color="primary" variant="contained">
              Connecting
            </Button>
          );
        case "no-wallet":
          return (
            <Button
              color="primary"
              variant="contained"
              onClick={() => setModalVisible(true)}
            >
              Connect Wallet
            </Button>
          );
        default:
          break;
      }
    }
  }, [buttonState, publicKey, setModalVisible]);

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={"32px"}
      width={"100%"}
      position={"absolute"}
      top={0}
      left={0}
      paddingX={"32px"}
      paddingY={"16px"}
    >
      <Box
        display={{ xs: "none", md: "block" }}
        width={"100%"}
        maxWidth={"462px"}
      >
        <OutlinedInput
          startAdornment={<IconSearch width="24" height="24" color="#7E7E7E" />}
          placeholder="Search..."
          color="primary"
          fullWidth
          sx={{
            bgcolor: "#000000",
            borderRadius: "16px",
            paddingX: "24px",
          }}
        />
      </Box>
      <Stack
        alignItems={"center"}
        direction={"row"}
        paddingY={"12px"}
        paddingX={"24px"}
        spacing={"24px"}
        bgcolor={"#000000"}
        borderRadius={"16px"}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "#FFFFFF",
              margin: 0,
              padding: 0,
            }}
          />
        }
      >
        <IconNotification width="20" height="20" color="#FFFFFF" />
        <Stack direction={"row"} spacing={"8px"} alignItems={"center"}>
          <Typography>{balance}</Typography>
          <IconSol />
        </Stack>
        {renderButton}
      </Stack>
    </Stack>
  );
}
