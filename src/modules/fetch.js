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
				400: 'Please enter a valid city name.',
				401: 'Unable to authenticate with the weather service. Please check the API key.',
				403: 'Access to the weather service is forbidden. Please check your API subscription.',
				404: 'We couldn’t find that city. Please check the spelling and try again.',
				408: 'The request timed out. Please try again.',
				429: 'Too many requests. Please wait a moment before trying again.',
				500: 'The weather service is experiencing problems. Please try again later.',
			};

			throw new Error(
				`${errorMessages[response.status] || 'Something went wrong, please try again'} `,
			);
		}

		const weatherData = await response.json();
		return weatherData;
	} catch (error) {
		console.error('Failed during data fetching - ', error.message);
		throw new Error(`Failed during data fetching - ${error.message}`);
	}
};

