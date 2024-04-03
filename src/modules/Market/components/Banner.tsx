import { IconTwiter } from '@/assets/icons';
import IconArrowUpRight from '@/assets/icons/IconArrowUpRight';
import IconQuestionInfo from '@/assets/icons/IconQuestionInfo';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Key } from 'react';

const secondColumnInfoList = [
	{ title: 'Total Volume', value: '$48,704.4' },
	{ title: 'Average Bids', value: '$48,704.4' },
	{ title: 'Average Asks', value: '$48,704.4' },
];

const thirdColumnInfoList = [
	{ title: 'Starting at', value: 'TBA' },
	{ title: 'Closing at', value: 'TBA' },
	{ title: 'Closing in', value: 'Not Started' },
];

export default function Banner() {
	return (
		<Paper
			variant='elevation'
			elevation={0}
		>
			<Stack
				direction={{ xs: 'column', lg: 'row' }}
				divider={
					<Divider
						orientation='vertical'
						flexItem
						sx={{ backgroundColor: '#6E727D' }}
					/>
				}
				spacing={2}
				width={'100%'}
				useFlexGap
			>
				<Box
					paddingX={'32px'}
					paddingY={'36px'}
					display={'flex'}
					gap={'19px'}
					width={'100%'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Image
						src={'/DEFAULT_IMAGE.png'}
						alt=''
						width={80}
						height={80}
					/>
					<Box
						display={'flex'}
						flexDirection={'column'}
						gap={'17px'}
					>
						<Typography
							component={'h3'}
							fontSize={'24px'}
							fontWeight={600}
						>
							Azuro
						</Typography>
						<Box
							paddingX={'16px'}
							paddingY={'8px'}
							borderRadius={'8px'}
							boxSizing={'border-box'}
							display={'flex'}
							gap={'8px'}
							alignItems={'center'}
							sx={{ backgroundColor: 'rgba(8, 229, 178, 0.20)' }}
						>
							<IconTwiter />
							<Divider
								orientation='vertical'
								flexItem
								sx={{ backgroundColor: '#08E5B2' }}
							/>
							<Typography
								component={'a'}
								fontSize={'14px'}
								fontWeight={600}
								color={'#08E5B2'}
								whiteSpace={'nowrap'}
							>
								https//azuro.org//ecosystem
							</Typography>
							<IconArrowUpRight />
						</Box>
					</Box>
				</Box>
				<Box
					paddingX={'32px'}
					paddingY={'36px'}
					display={'flex'}
					flexDirection={'column'}
					gap={'12px'}
					width={'100%'}
				>
					{secondColumnInfoList.map((info, key: Key) => (
						<Box
							key={key}
							display={'flex'}
							justifyContent={'space-between'}
						>
							<Box
								display={'flex'}
								gap={'6px'}
								alignItems={'center'}
							>
								<Typography
									fontSize={'14px'}
									color={'#6E727D'}
								>
									{info.title}
								</Typography>
								<IconQuestionInfo />
							</Box>
							<Typography
								fontSize={'14px'}
								fontWeight={600}
							>
								{info.value}
							</Typography>
						</Box>
					))}
				</Box>
				<Box
					paddingX={'32px'}
					paddingY={'36px'}
					display={'flex'}
					flexDirection={'column'}
					gap={'12px'}
					width={'100%'}
				>
					{thirdColumnInfoList.map((info, key: Key) => (
						<Box
							key={key}
							display={'flex'}
							justifyContent={'space-between'}
						>
							<Typography
								fontSize={'14px'}
								color={'#6E727D'}
							>
								{info.title}
							</Typography>
							<Typography
								fontSize={'14px'}
								fontWeight={600}
							>
								{info.value}
							</Typography>
						</Box>
					))}
				</Box>
			</Stack>
		</Paper>
	);
}