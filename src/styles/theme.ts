'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
	typography: {
		fontFamily: inter.style.fontFamily,
	},
	palette: {
		primary: {
			main: '#9945FF',
			contrastText: '#FFF',
		},
		secondary: {
			main: '#08E5B2',
			contrastText: '#000000',
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
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '0.5rem',
				},
				outlined: {
					borderRadius: '0.5rem',
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
