export const mapWeatherConditionIcons = (iconString) => {
	const weatherIcons = {
		'clear-day': 'clear_day',
		'clear-night': 'bedtime',
		'partly-cloudy-day': 'partly_cloudy_day',
		'partly-cloudy-night': 'partly_cloudy_night',
		cloudy: 'cloud',
		rain: 'rainy',
		snow: 'weather_snowy',
		fog: 'foggy',
		wind: 'airwave',
	};

	return weatherIcons[iconString];
};

export const capitalizeWord = (word) => {
	return word.at(0).toUpperCase().concat(word.slice(1));
};

const isToday = (dateString) => {
	const date = new Date(`${dateString}T00:00:00`);
	const today = new Date();

	return (
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate()
	);
};

export const celsiusToFarenheit = (deg) => {
	return Math.round((deg * 9) / 5 + 32);
};

export const convertDate = (dateString) => {
	const date = new Date(`${dateString}T00:00:00`);

	if (isToday(dateString)) {
		return 'Today';
	}

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return days[date.getDay()];
};

export const transformWeatherData = (weatherData) => {
	const weekData = weatherData.days.slice(0, 7).map((day) => {
		return {
			datetime: day.datetime,
			tempmin: parseInt(day.tempmin),
			tempmax: parseInt(day.tempmax),
			icon: day.icon,
		};
	});

	const tempData = weekData[0];
	tempData.address = capitalizeWord(weatherData.address);
	tempData.temp = weatherData.currentConditions.temp;
	tempData.conditions = weatherData.currentConditions.conditions;

	const { humidity, uvindex, windspeed, sunrise, sunset } =
		weatherData.currentConditions;

	return {
		weekData,
		tempData,
		insightData: {
			humidity,
			uvindex,
			windspeed,
			sunrise,
			sunset,
		},
	};
};

