const WEATHER_API_KEY = '8N26L37KFEY7435QLA3NSWJN2';
const WEATHER_BASE_URL =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const fetchWeatherData = async (location) => {
	try {
		const response = await fetch(
			`${WEATHER_BASE_URL}${location}?unitGroup=metric&key=${WEATHER_API_KEY}`,
		);

		if (!response.ok) {
			const errorMessages = {
				400: 'Please insert a valid city name!',
				401: 'Please verify the validity of your API key!',
			};

			throw new Error(`${errorMessages[response.status]}`);
		}

		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		console.error('Failed to fetch weather data - ', error.message);
		throw new Error(`Failed to fetch weather data - ${error.message}`);
	}
};

