import { createDOMElement } from '../modules/domUtils.js';
import { createSearchForm } from '../modules/searchForm.js';

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

const createInitialFooterContainer = () => {
	// Left footer section
	const githubLink = createDOMElement({
		element: 'a',
		textContent: 'hammerztein.',
		attributes: [
			{
				href: 'https://github.com/hammerztein',
				target: '_blank',
			},
		],
	});
	const allRightReserved = document.createTextNode(' All rights reserved.');
	const leftSmallWrapper = createDOMElement({
		element: 'small',
		textContent: '© 2026 ',
		children: [githubLink, allRightReserved],
	});
	const leftDiv = createDOMElement({
		element: 'div',
		children: [leftSmallWrapper],
	});

	// Right footer section
	const linkOne = createDOMElement({
		element: 'a',
		textContent: 'Privacy Policy',
	});
	const linkTwo = createDOMElement({
		element: 'a',
		textContent: 'Terms of Service',
	});
	const linkThree = createDOMElement({
		element: 'a',
		textContent: 'Data Sources',
	});
	const listElementOne = createDOMElement({
		element: 'li',
		children: [linkOne],
	});
	const listElementTwo = createDOMElement({
		element: 'li',
		children: [linkTwo],
	});
	const listElementThree = createDOMElement({
		element: 'li',
		children: [linkThree],
	});
	const listOfLinks = createDOMElement({
		element: 'ul',
		attributes: [{ class: 'links' }],
		children: [listElementOne, listElementTwo, listElementThree],
	});
	const rightSmallWrapper = createDOMElement({
		element: 'small',
		children: [listOfLinks],
	});
	const rightDiv = createDOMElement({
		element: 'div',
		children: [rightSmallWrapper],
	});

	const footer = createDOMElement({
		element: 'footer',
		attributes: [{ class: 'footer' }],
		children: [leftDiv, rightDiv],
	});

	return footer;
};

export const createInitialView = (root) => {
	const mainContainer = createInitialMainContainer();
	const footerContainer = createInitialFooterContainer();

	root.append(mainContainer, footerContainer);
};

