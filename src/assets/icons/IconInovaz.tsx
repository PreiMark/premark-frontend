import { TIconProps } from './types';

export default function IconInovaz(props: TIconProps) {
	return (
		<svg
			width={props.width ?? '48'}
			height={props.height ?? '48'}
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				width='48'
				height='48'
				rx='24'
				fill='white'
			/>
			<path
				d='M19.816 21.9155L28.0972 14.9772L24.7151 20.9452L27.8226 26.7506L19.353 33.6L22.8642 27.7697C22.8642 27.7697 19.8343 22.0521 19.816 21.9155Z'
				fill={props.color}
			/>
			<path
				d='M20.3982 26.5475C15.1373 27.8582 11.4054 28.0948 11.1685 27.2893C10.9445 26.5304 13.6885 24.8706 18.3873 23.1697'
				stroke={props.color}
				stroke-width='3.75477'
				stroke-miterlimit='10'
			/>
			<path
				d='M28.0312 20.0725C32.647 18.9992 37.2149 18.6892 37.4304 19.422C37.6951 20.3197 34.1557 22.1412 28.0312 24.137'
				stroke={props.color}
				stroke-width='3.75477'
				stroke-miterlimit='10'
			/>
			<path
				d='M26.562 20.0548L27.5408 19.151L27.8799 17.8596L28.7778 18.8454L30.0614 19.1899L29.0836 20.0924L28.7445 21.3838L27.8465 20.398L26.562 20.0548Z'
				fill={props.color}
			/>
		</svg>
	);
}
