import { createTemperatureCard } from '../components/tempCard.js';
import { createWeekDayCards } from '../components/weekTempCards.js';
import { createWeatherInsights } from '../components/weatherInsightCards.js';

export const createMainContainer = (weatherData) => {
	const { tempData, weekData, insightData } = weatherData;
	const main = document.createElement('main');
	main.className = 'main weather-data';
	const tempCard = createTemperatureCard(tempData);
	const weekTempCards = createWeekDayCards(weekData);
	const weatherInsightCards = createWeatherInsights(insightData);
	main.append(tempCard, weekTempCards, weatherInsightCards);
	return main;
};

