import { mapWeatherConditionIcons } from '../utils/utils.js';

export const createTemperatureCard = (tempData) => {
	const section = document.createElement('section');
	section.className = 'temperature-card';
	const html = `
		<div class="temperature">
			<span class="material-symbols-outlined">${mapWeatherConditionIcons(tempData.icon)}</span>
			<h2 class="degree">${tempData.temp}</h2>
		</div>
		<div class="location">
			<div class="row">
				<h3>${tempData.conditions} •</h3>
				<h3>${tempData.address}</h3>
			</div>
			<div class="row">
				<p class="degree">High: ${tempData.tempmax}</p>
				<p class="degree">Low: ${tempData.tempmin}</p>
			</div>
		</div>
	`;
	section.innerHTML = html;
	return section;
};

