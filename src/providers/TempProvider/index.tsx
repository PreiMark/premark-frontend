'use client';

import { ReactNode, useEffect } from 'react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import axiosInstance from '@/config/axios.config';

export default function TempProvider({ children }: { children: ReactNode }) {
	const { setVisible: setModalVisible } = useWalletModal();
	const { publicKey } = useWalletMultiButton({
		onSelectWallet() {
			setModalVisible(true);
		},
	});

	useEffect(() => {
		const checkUser = async () => {
			if (publicKey) {
				try {
					const walletAddress = publicKey.toBase58();
					const res = await axiosInstance.get(
						`/user/${walletAddress}/exists`,
					);
					if (res) {
						if (res.data.data === false) {
							await axiosInstance.post('/user/create', {
								walletAddress: publicKey.toBase58(),
								networkName: 'SOLANA',
							});
						}
					}
				} catch (error) {
					console.log(error);
				}
			}
		};

		checkUser();
	}, [publicKey]);
	return <>{children}</>;
}
