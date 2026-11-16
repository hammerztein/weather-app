import { createSearchForm } from './searchForm.js';

export const createInitialMainContainer = () => {
	const main = document.createElement('main');
	main.className = 'main';
	const html = `
		<h1>Where would you like to check the weather?</h1>
		<p>Search for any city worldwide to explore real-time forecasts.</p>
	`;
	const searchForm = createSearchForm('initial');
	main.innerHTML = html;
	main.append(searchForm);

	return main;
};

