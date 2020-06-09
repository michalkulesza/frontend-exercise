import data from "../recipes.json";

export const mostFavourited = () => {
	let arr = data.sort((a, b) => {
		if (a.favorites > b.favorites) return -1;
		if (a.favorites < b.favorites) return 1;
		return 0;
	});
	return arr;
};

export default { mostFavourited };
