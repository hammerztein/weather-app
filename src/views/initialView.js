import { createDOMElement } from '../modules/domUtils.js';
import { createSearchForm } from '../modules/searchForm.js';
import { createFooter } from '../modules/footer.js';

const createInitialMainContainer = () => {
	const searchForm = createSearchForm('initial');
	const paragraph = createDOMElement({
		element: 'p',
		textContent:
			'Search for any city worldwide to explore real-time forecasts.',
	});
	const heading = createDOMElement({
		element: 'h1',
		textContent: 'Where would you like to check the weather?',
	});

	const main = createDOMElement({
		element: 'main',
		attributes: [{ class: 'main' }],
		children: [heading, paragraph, searchForm],
	});
	return main;
};

export const createInitialView = (root) => {
	const main = createInitialMainContainer();
	const footer = createFooter();

	root.append(main, footer);
};

