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
	const date = Temporal.PlainDate.from(dateString);
	const today = Temporal.Now.plainDateISO();
	const isToday = Temporal.PlainDate.compare(date, today);

	if (isToday === 0) {
		return true;
	}

	return false;
};

export const convertDate = (dateString) => {
	const date = Temporal.PlainDate.from(dateString);
	const today = isToday(date);

	if (today) {
		return 'Today';
	}

	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const weekDay = date.dayOfWeek - 1;
	return days[weekDay];
};

