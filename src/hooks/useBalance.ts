import { useWallet } from '@solana/wallet-adapter-react';
import * as React from 'react';
import * as anchor from "@project-serum/anchor"
import { endpoint } from '@/utils/helper';

export default function useBalance () {
  const [balance, setBalance] = React.useState<string>("0.0");
  const {publicKey} = useWallet();

  const connection = new anchor.web3.Connection(endpoint, {
    commitment: "processed",
  });

  const getBalance = async () => {
    const walletBalance = await connection.getBalance(publicKey as any);
    setBalance((walletBalance / 1000000000).toFixed(4))
  };

  React.useEffect(()=> {
    if(publicKey) getBalance()
  }, [publicKey])

  return {balance}
}
