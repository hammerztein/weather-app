export const replaceDashWithUnderscore = (string) => {
	return string.replaceAll('-', '_');
};

export const capitalizeWord = (word) => {
	return word.at(0).toUpperCase().concat(word.slice(1));
};
