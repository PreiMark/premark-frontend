export const epochToMmDdYyyy = (epoch: EpochTimeStamp) => {
	// Create a new Date object from the epoch timestamp in milliseconds
	const date = new Date(epoch * 1000);

	// Extract year, month, and day components
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
	const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero

	// Format the date in mm-dd-yyyy
	return `${month}-${day}-${year}`;
};
