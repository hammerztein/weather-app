import { createDOMElement } from '../modules/domUtils.js';
import { createSearchForm } from '../modules/searchForm.js';

const createHeader = () => {
	const headerIcon = createDOMElement({
		element: 'span',
		textContent: 'cloud',
		attributes: [
			{
				class: 'material-symbols-outlined header-icon',
			},
		],
	});
	const headerBrandText = createDOMElement({
		element: 'h1',
		textContent: 'Pilveke',
	});
	const headerBrand = createDOMElement({
		element: 'div',
		attributes: [
			{
				class: 'brand',
			},
		],
		children: [headerIcon, headerBrandText],
	});

	const searchForm = createSearchForm('weather-data');

	// Create input field form
	const header = createDOMElement({
		element: 'header',
		attributes: [
			{
				class: 'header',
			},
		],
		children: [headerBrand, searchForm],
	});

	return header;
};

export const createWeatherView = (root) => {
	const header = createHeader();

	root.append(header);
};

