import { createDOMElement, cleanContainer } from '../utils/domUtils.js';
import { createSearchForm } from '../components/searchForm.js';
import { createFooter } from '../components/footer.js';
import {
	mapWeatherConditionIcons,
	capitalizeWord,
	convertDate,
} from '../utils/utils.js';

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

const createDayCard = (dayData) => {
	const dayEl = createDOMElement({
		element: 'p',
		attributes: [{ class: 'day small' }],
		textContent: convertDate(dayData.datetime),
	});

	const conditionsIcon = createDOMElement({
		element: 'span',
		textContent: mapWeatherConditionIcons(dayData.icon),
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const tempHigh = createDOMElement({
		element: 'h4',
		textContent: dayData.tempmax,
		attributes: [{ class: 'degree' }],
	});

	const tempLow = createDOMElement({
		element: 'p',
		textContent: dayData.tempmin,
		attributes: [{ class: 'degree small' }],
	});

	const card = createDOMElement({
		element: 'article',
		attributes: [
			{
				class: 'day-card',
			},
		],
		children: [dayEl, conditionsIcon, tempHigh, tempLow],
	});

	return card;
};

const createWeekDayCards = (daysData) => {
	const header = createDOMElement({
		element: 'h3',
		textContent: '7-Day Forecast',
	});

	let cards = [];
	for (const dayData of daysData) {
		const dayCard = createDayCard(dayData);
		cards.push(dayCard);
	}

	const cardsContainer = createDOMElement({
		element: 'div',
		attributes: [{ class: 'forecast-cards' }],
		children: cards,
	});

	const section = createDOMElement({
		element: 'section',
		attributes: [{ class: 'week-forecast' }],
		children: [header, cardsContainer],
	});

	return section;
};

const createTemperatureCard = (temperatureData) => {
	const { temp, conditions, icon, tempmax, tempmin, address } = temperatureData;
	const temperature = createDOMElement({
		element: 'h2',
		textContent: temp,
		attributes: [{ class: 'degree' }],
	});
	const conditionsIcon = createDOMElement({
		element: 'span',
		textContent: mapWeatherConditionIcons(icon),
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
		textContent: `${conditions} • `,
	});
	const location = createDOMElement({ element: 'h3', textContent: address });
	const tempMax = createDOMElement({
		element: 'p',
		textContent: `High: ${tempmax}`,
		attributes: [{ class: 'degree' }],
	});
	const tempMin = createDOMElement({
		element: 'p',
		textContent: `Low: ${tempmin}`,
		attributes: [{ class: 'degree' }],
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

const createMainContainer = (weatherData) => {
	const daysData = weatherData.days.slice(0, 7);
	const temperatureData = daysData[0];
	temperatureData.address = capitalizeWord(weatherData.address);

	const main = createDOMElement({
		element: 'main',
		attributes: [{ class: 'main weather-data' }],
		children: [
			createTemperatureCard(temperatureData),
			createWeekDayCards(daysData),
		],
	});

	return main;
};

export const createWeatherView = (weatherData) => {
	const root = document.getElementById('root');
	cleanContainer(root);
	const header = createHeader();
	const main = createMainContainer(weatherData);
	const footer = createFooter();
	root.append(header, main, footer);
};

