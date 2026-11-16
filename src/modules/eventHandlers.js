import { fetchWeatherData } from './fetch.js';
import { createWeatherView } from '../views/weatherView.js';
import { updateTemperatures } from './temperature.js';
import { transformWeatherData } from '../utils/utils.js';
import { state } from '../modules/state.js';

export const searchWeatherData = async (e) => {
	e.preventDefault();
	const searchTerm = new FormData(e.target).get('city');

	if (searchTerm === '') {
		return;
	}

	try {
		const response = await fetchWeatherData(searchTerm);
		state.weatherData = transformWeatherData(response);
		createWeatherView(state.weatherData);
	} catch (error) {
		console.error('Error while trying to fetch city data:', error.message);
		alert(`Error: ${error.message}`);
	} finally {
		e.target.reset();
	}
};

export const toggleTempData = (e) => {
	state.temperatureUnit = e.target.checked ? 'F' : 'C';
	updateTemperatures(state.temperatureUnit);
};

