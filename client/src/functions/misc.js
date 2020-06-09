export const getRandomNumber = maxNum => {
	let num;

	while (num > maxNum || num === undefined) {
		num = Math.random() * 10;
		num = Math.floor(num);
	}

	return num;
};

export default getRandomNumber;
