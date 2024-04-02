import { AnchorProvider } from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';

export const useProvider = () => {
	const wallet = useAnchorWallet();

	if (!wallet) {
		return null;
	}
	const network = WalletAdapterNetwork.Testnet;

	const connection = new Connection(network, 'processed');

	const provider = new AnchorProvider(connection, wallet, {
		preflightCommitment: 'processed',
	});

	return provider;
};
