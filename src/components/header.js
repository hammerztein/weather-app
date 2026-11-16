import { createSearchForm } from './searchForm.js';

export const createHeader = () => {
	const header = document.createElement('header');
	header.className = 'header';
	const html = `
		<div class="brand">
			<span class="material-symbols-outlined header-icon">cloud</span>
			<h1>Pilveke</h1>
		</div>
		<div id="search-placeholder"></div>
		<input type="checkbox" name="deg-toggle" id="deg-toggle" />
	`;

	header.innerHTML = html;
	const searchForm = createSearchForm('weather-data');
	const placeholder = header.querySelector('#search-placeholder');
	header.replaceChild(searchForm, placeholder);
	return header;
};

