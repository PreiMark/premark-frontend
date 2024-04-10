import { web3, BN, Address, IdlAccounts } from "@project-serum/anchor";

export type Address = `0x${string}`;

export type Network = {
  contract: Address;
  token: Address;
};

export type Networks = Record<number, Network>;

export type InitializeOffer = {
  retailer?: web3.Keypair;
  bidMint: Address;
  bidTotal: BN;
  bidPoint: BN;
  sendAndConfirm?: boolean;
};
