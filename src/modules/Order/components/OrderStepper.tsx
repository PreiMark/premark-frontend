import { ORDER_STEPS } from '@/constant';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Key } from 'react';

export default function OrderStepper({ activeStep }: { activeStep: number }) {
	return (
		<Stepper
			activeStep={activeStep}
			alternativeLabel
		>
			{ORDER_STEPS.map((label: string, key: Key) => (
				<Step key={key}>
					<StepLabel color='#FFF'>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
}
