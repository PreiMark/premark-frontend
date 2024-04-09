import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import * as anchor from "@project-serum/anchor";
import { SOL_NETWORK } from "@/config/env.config";

export const solNetwork = ()=> {
  switch (SOL_NETWORK) {
    case 'mainnet':
     return WalletAdapterNetwork.Mainnet  
    case 'testnet':
      return WalletAdapterNetwork.Testnet  
    default:
        return WalletAdapterNetwork.Devnet  
  }
}

export  const endpoint = anchor.web3.clusterApiUrl(solNetwork());