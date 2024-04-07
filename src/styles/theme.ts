'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
	breakpoints: {
		values: {
		  xs: 0,
		  sm: 768,
		  md: 900,
		  lg: 1200,
		  xl: 1536,
		},
	  },
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
	components: {
		MuiRadio: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
					color: 'white',
				},
			},
		},

		MuiStepIcon: {
			styleOverrides: {
				root: {
					'&.Mui-completed': {
						color: '#9945FF',
						border: 'none',
					},
					'&.Mui-active': {
						color: '#08E5B2',
						border: 'none',
					},
					fontSize: '0.875rem',
					fontWeight: '600',
					width: '40px',
					height: '40px',
					color: 'transparent',
					border: '1px solid #FFF',
					borderRadius: '100%',
				},
			},
		},
		MuiStepLabel: {
			styleOverrides: {
				label: {
					color: '#FFF',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				rounded: {
					borderRadius: '1rem',
					backgroundColor: 'rgba(23, 29, 41, 0.50)',
				},
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
});

export default theme;
