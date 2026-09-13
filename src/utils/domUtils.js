export const createDOMElement = (options) => {
	const element = document.createElement(options.element);

	if (options.textContent) {
		element.textContent = options.textContent;
	}

	if (options.attributes?.length > 0) {
		for (const attributes of options.attributes) {
			for (const attribute in attributes) {
				element.setAttribute(attribute, attributes[attribute]);
			}
		}
	}

	if (options.children?.length > 0) {
		for (const child of options.children) {
			element.append(child);
		}
	}

	return element;
};

