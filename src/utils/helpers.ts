const getCommand = (value: string) => {
	return value.substring(0, value.indexOf(' '));
};

const getTextToBeTranslated = (value: string) => {
	return value.substring(value.indexOf(' '), value.length);
};

export { getCommand, getTextToBeTranslated };
