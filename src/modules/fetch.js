const WEATHER_API_KEY = '8N26L37KFEY7435QLA3NSWJN2';
const WEATHER_BASE_URL =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const fetchWeatherData = async (location) => {
	try {
		const response = await fetch(
			`${WEATHER_BASE_URL}${location}?key=${WEATHER_API_KEY}`,
		);
		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		console.error('Failed to fetch weather data:', error.message);
	}
};

