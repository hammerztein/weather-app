import { convertDate, mapWeatherConditionIcons } from '../utils/utils.js';

const createDayCard = (dayData) => {
	const html = `
		<article class="card">
			<p class="bold small">${convertDate(dayData.datetime)}</p>
			<span class="material-symbols-outlined">${mapWeatherConditionIcons(dayData.icon)}</span>
			<h4 class="degree">${dayData.tempmax}</h4>
			<p class="degree small">${dayData.tempmin}</p>
		</article>
	`;

	return html;
};

export const createWeekDayCards = (weekData) => {
	const section = document.createElement('section');
	section.className = 'weather-section';
	const html = `
		<h3>7-Day Forecast</h3>
		<div class="cards">
			${weekData
				.map((day) => {
					return createDayCard(day);
				})
				.join('')}
		</div>
	`;
	section.innerHTML = html;
	return section;
};

