import { createDOMElement } from './domUtils.js';

export const createSearchForm = (className) => {
	const labelImage = createDOMElement({
		element: 'span',
		textContent: 'search',
		attributes: [{ class: 'material-symbols-outlined' }],
	});
	const inputLabel = createDOMElement({
		element: 'label',
		attributes: [
			{
				for: 'city',
			},
		],
		children: [labelImage],
	});
	const input = createDOMElement({
		element: 'input',
		attributes: [
			{
				type: 'text',
				name: 'city',
				id: 'city',
				required: true,
				placeholder: 'Search for a city (e.g Tokyo, London, Berlin)',
			},
		],
	});
	const arrowIcon = createDOMElement({
		element: 'span',
		textContent: 'arrow_forward',
		attributes: [
			{
				class: 'material-symbols-outlined search-icon',
			},
		],
	});

	const searchBtn = createDOMElement({
		element: 'button',
		attributes: [
			{
				type: 'submit',
				class: 'search-btn',
			},
		],
		children: [arrowIcon],
	});

	const form = createDOMElement({
		element: 'form',
		attributes: [{ class: `search-form ${className}` }],
		children: [inputLabel, input, searchBtn],
	});

	return form;
};

