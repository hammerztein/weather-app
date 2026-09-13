import { createDOMElement } from '../modules/domUtils.js';
import { createSearchForm } from '../modules/searchForm.js';
import { createFooter } from '../modules/footer.js';
import { replaceDashWithUnderscore } from '../modules/utils.js';

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

const createTemperatureCard = (temperatureData) => {
	const { temp, conditions, icon, tempmax, tempmin, address } = temperatureData;
	const temperature = createDOMElement({ element: 'h2', textContent: temp });
	const conditionsIcon = createDOMElement({
		element: 'span',
		textContent: replaceDashWithUnderscore(icon),
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const leftDiv = createDOMElement({
		element: 'div',
		attributes: [
			{
				class: 'temperature',
			},
		],
		children: [conditionsIcon, temperature],
	});

	const conditionsEl = createDOMElement({
		element: 'h3',
		textContent: conditions,
	});
	const location = createDOMElement({ element: 'h3', textContent: address });
	const tempMax = createDOMElement({
		element: 'p',
		textContent: `High: ${tempmax}`,
	});
	const tempMin = createDOMElement({
		element: 'p',
		textContent: `Low: ${tempmin}`,
	});

	const rowOne = createDOMElement({
		element: 'div',
		attributes: [{ class: 'row' }],
		children: [conditionsEl, location],
	});

	const rowTwo = createDOMElement({
		element: 'div',
		attributes: [{ class: 'row' }],
		children: [tempMax, tempMin],
	});

	const rightDiv = createDOMElement({
		element: 'div',
		attributes: [
			{
				class: 'location',
			},
		],
		children: [rowOne, rowTwo],
	});

	const section = createDOMElement({
		element: 'section',
		attributes: [
			{
				class: 'temperature-card',
			},
		],
		children: [leftDiv, rightDiv],
	});

	return section;
};

const createMainContainer = () => {
	const main = createDOMElement({
		element: 'main',
		attributes: [{ class: 'main weather-data' }],
		children: [
			createTemperatureCard({
				temp: '72',
				conditions: 'Partyl Cloudy',
				icon: 'partly-cloudy-day',
				tempmax: '100',
				tempmin: '55',
				address: 'Tallinn',
			}),
		],
	});

	return main;
};

export const createWeatherView = (root) => {
	const header = createHeader();
	const main = createMainContainer();
	const footer = createFooter();
	root.append(header, main, footer);
};

