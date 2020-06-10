export const displayError = (error, setErrorState) => {
	setErrorState(error);
	setTimeout(() => {
		setErrorState(null);
	}, 2000);
};

export default displayError;
