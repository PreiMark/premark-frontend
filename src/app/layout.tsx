import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import { CssBaseline } from '@mui/material';
import React from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import SolWalletProvider from '../providers/WalletProvider';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<SolWalletProvider>
					<AppRouterCacheProvider
						options={{ key: 'css', enableCssLayer: true }}
					>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							{children}
						</ThemeProvider>
					</AppRouterCacheProvider>
				</SolWalletProvider>
			</body>
		</html>
	);
}
