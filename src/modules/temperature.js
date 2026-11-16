import { celsiusToFarenheit } from '../utils/utils.js';

export const updateTemperatures = (temperatureUnit) => {
	const temps = [...document.querySelectorAll('.temp')];

	temps.map((temp) => {
		const celsius = temp.dataset.celsius;
		if (temperatureUnit === 'F') {
			temp.textContent = `${celsiusToFarenheit(celsius)}°F`;
		}

		if (temperatureUnit === 'C') {
			temp.textContent = `${temp.dataset.celsius}°C`;
		}
	});
};

