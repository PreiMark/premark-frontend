export const validateNumber = (value: string) => {
	const numberRegex = /^\d+(\.\d+)?$/;
	return numberRegex.test(value);
};
