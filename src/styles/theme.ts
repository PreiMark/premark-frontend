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
			main: '#FC3B69',
			contrastText: '#FFF',
		},
		secondary: {
			main: '#FFD12D',
			contrastText: '#000',
		},
		info: {
			main: '#000000',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#FFF',
			disabled: '#C8C3D2',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				outlined: {
					background: '#000000',
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

		MuiStepIcon: {
			styleOverrides: {
				root: {
					'&.Mui-completed': {
						color: '#FFD12D',
						border: 'none',
					},
					'&.Mui-active': {
						color: '#FC3B69',
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
					border: '2px solid #000',
					backgroundColor: 'rgba(0, 0, 0, 0.65)',
					backdropFilter: 'blur(8px)',
				},
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
});

export default theme;
