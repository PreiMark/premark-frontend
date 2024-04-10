import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Box, ListItem } from "@mui/material";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { SliceAddressWallet } from "@/utils/helper";

export default function WalletMenuButton() {
  const { setVisible: setModalVisible } = useWalletModal();
  const {  publicKey, onDisconnect } =
    useWalletMultiButton({
      onSelectWallet() {
        setModalVisible(true);
      },
    });
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const ref = React.useRef<any>();

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <Box position={"relative"}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
            color:'white'
        }}
      >
        {publicKey && SliceAddressWallet(publicKey)}
      </Button>
      {!!open && (
        <ListItem
          ref={ref}
          sx={{
            width: "150px",
            display: "flex",
            top: "50px",
            right: "-30px",
            flexDirection: "column",
            position: "absolute",
            bgcolor: "#000000",
            borderRadius: "16px",
            zIndex: "40",
            gap: "10px",
          }}
        >
          <MenuItem
            sx={{
              textAlign: "start",

              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            onClick={async () => {
              if (publicKey) {
                await navigator.clipboard.writeText(publicKey.toBase58());
                setCopied(true);
                setTimeout(() => setCopied(false), 400);
              }
            }}
          >
            {copied ? "Copied" : "Copy Address"}
          </MenuItem>
          <MenuItem
            sx={{
              textAlign: "start",

              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            onClick={() => {
              setModalVisible(true);
              setOpen(false);
            }}
          >
            {" "}
            Change wallet
          </MenuItem>
          <MenuItem
            sx={{
              textAlign: "start",

              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            onClick={onDisconnect}
          >
            Disconnect
          </MenuItem>
        </ListItem>
      )}
    </Box>
  );
}
