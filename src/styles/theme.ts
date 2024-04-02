'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
	typography: {
		fontFamily: inter.style.fontFamily,
	},
	palette: {
		common: {
			black: '#000',
			white: '#FFF',
		},
		primary: {
			main: '#9945FF',
			contrastText: '#FFF',
		},
		secondary: {
			main: '#08E5B2',
			contrastText: '#000',
		},
		info: {
			main: '#6E727D',
			contrastText: '#F1F1F1',
		},
		text: {
			primary: '#FFF',
			disabled: '#6E727D',
		},
	},
	// shape: {
	// 	borderRadius: '0.5rem',
	// },
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '0.5rem',
				},
				outlined: {
					borderRadius: '0.5rem',
					borderColor: 'red',
				},
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
					color: 'white',
				},
			},
		},
	},
});

export default theme;
