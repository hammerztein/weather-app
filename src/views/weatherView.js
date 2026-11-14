import { createDOMElement, cleanContainer } from '../utils/domUtils.js';
import { createSearchForm } from '../components/searchForm.js';
import { createFooter } from '../components/footer.js';
import {
	mapWeatherConditionIcons,
	capitalizeWord,
	convertDate,
} from '../utils/utils.js';
import { data } from '../../data.json';

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

const createHumidityCard = (humidity) => {
	const icon = createDOMElement({
		element: 'span',
		textContent: 'humidity_mid',
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const humidityText = createDOMElement({
		element: 'p',
		textContent: 'Humidity',
		attributes: [
			{
				class: 'small bold',
			},
		],
	});

	const cardTitle = createDOMElement({
		element: 'div',
		attributes: [{ class: 'card-title' }],
		children: [icon, humidityText],
	});

	const humidityValue = createDOMElement({
		element: 'h4',
		textContent: `${humidity}%`,
		attributes: [
			{
				class: 'insight-data',
			},
		],
	});

	const card = createDOMElement({
		element: 'article',
		attributes: [{ class: 'card' }],
		children: [cardTitle, humidityValue],
	});

	return card;
};

const createWindCard = (wind) => {
	const icon = createDOMElement({
		element: 'span',
		textContent: 'air',
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const windText = createDOMElement({
		element: 'p',
		textContent: 'Wind',
		attributes: [
			{
				class: 'small bold',
			},
		],
	});

	const cardTitle = createDOMElement({
		element: 'div',
		attributes: [{ class: 'card-title' }],
		children: [icon, windText],
	});

	const windValue = createDOMElement({
		element: 'h4',
		textContent: `${wind} m/s`,
		attributes: [
			{
				class: 'insight-data',
			},
		],
	});

	const card = createDOMElement({
		element: 'article',
		attributes: [{ class: 'card' }],
		children: [cardTitle, windValue],
	});

	return card;
};

const createUVIndexCard = (UVIndex) => {
	const icon = createDOMElement({
		element: 'span',
		textContent: 'sunny',
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const uvText = createDOMElement({
		element: 'p',
		textContent: 'UV Index',
		attributes: [
			{
				class: 'small bold',
			},
		],
	});

	const cardTitle = createDOMElement({
		element: 'div',
		attributes: [{ class: 'card-title' }],
		children: [icon, uvText],
	});

	const uvValue = createDOMElement({
		element: 'h4',
		textContent: `${UVIndex}`,
		attributes: [
			{
				class: 'insight-data',
			},
		],
	});

	const card = createDOMElement({
		element: 'article',
		attributes: [{ class: 'card' }],
		children: [cardTitle, uvValue],
	});

	return card;
};

const createSunriseSunsetCard = (sunrise, sunset) => {
	const icon = createDOMElement({
		element: 'span',
		textContent: 'wb_twilight',
		attributes: [{ class: 'material-symbols-outlined' }],
	});

	const sunText = createDOMElement({
		element: 'p',
		textContent: 'Sunrise & Sunset',
		attributes: [
			{
				class: 'small bold',
			},
		],
	});

	const cardTitle = createDOMElement({
		element: 'div',
		attributes: [{ class: 'card-title' }],
		children: [icon, sunText],
	});

	const sunriseValue = createDOMElement({
		element: 'h4',
		textContent: `${sunrise}`,
	});

	const sunsetValue = createDOMElement({
		element: 'h4',
		textContent: `${sunset}`,
	});

	const timeStamps = createDOMElement({
		element: 'div',
		attributes: [{ class: 'timestamps' }],
		children: [sunriseValue, sunsetValue],
	});

	const card = createDOMElement({
		element: 'article',
		attributes: [{ class: 'card' }],
		children: [cardTitle, timeStamps],
	});

	return card;
};

const createWeatherInsights = (weatherInsightData) => {
	const sectionTitle = createDOMElement({
		element: 'h3',
		textContent: 'Weather Insights',
	});

	const insightCardsContainer = createDOMElement({
		element: 'div',
		attributes: [
			{
				class: 'cards',
			},
		],
		children: [
			createHumidityCard(weatherInsightData.humidity),
			createWindCard(weatherInsightData.windspeed),
			createUVIndexCard(weatherInsightData.uvindex),
			createSunriseSunsetCard(
				weatherInsightData.sunrise,
				weatherInsightData.sunset,
			),
		],
	});
	const section = createDOMElement({
		element: 'section',
		attributes: [
			{
				class: 'weather-section',
			},
		],
		children: [sectionTitle, insightCardsContainer],
	});

	return section;
};

const createDayCard = (dayData) => {
	const dayEl = createDOMElement({
		element: 'p',
		attributes: [{ class: 'bold small' }],
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
				class: 'card',
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
		attributes: [{ class: 'cards' }],
		children: cards,
	});

	const section = createDOMElement({
		element: 'section',
		attributes: [{ class: 'weather-section' }],
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
	const { tempData, weekData, insightData } = weatherData;

	const main = createDOMElement({
		element: 'main',
		attributes: [{ class: 'main weather-data' }],
		children: [
			createTemperatureCard(tempData),
			createWeekDayCards(weekData),
			createWeatherInsights(insightData),
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

