import { searchWeatherData } from '../modules/eventHandlers.js';

export const createSearchForm = (className) => {
	const form = document.createElement('form');
	form.className = `search-form ${className}`;
	const html = `
		<label for="city">
			<span class="material-symbols-outlined">search</span>
		</label>
		<input 
		type="text"
		name="city"
		id="city"
		required="true"
		placeholder="Search for a city (e.g Tokyo, London, Berlin)" />
		<button type="submit" class="search-btn">
			<span class="material-symbols-outlined search-icon">
				arrow_forward
			</span>
		</button>
	`;

	form.innerHTML = html;
	form.addEventListener('submit', searchWeatherData);
	return form;
};
