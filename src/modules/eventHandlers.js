import { fetchWeatherData } from './fetch.js';
import { createWeatherView } from '../views/weatherView.js';

export const searchWeatherData = async (e) => {
	e.preventDefault();
	const searchTerm = new FormData(e.target).get('city');

	if (searchTerm === '') {
		return;
	}

	try {
		const weatherData = await fetchWeatherData(searchTerm);
		createWeatherView(weatherData);
	} catch (error) {
		console.error('Please insert a valid city name:', error.message);
		alert('Please insert a valid city name!');
		// TODO Render custom view for incorrect user input
	} finally {
		e.target.reset();
	}
};

