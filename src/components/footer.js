import { createDOMElement } from '../utils/domUtils.js';

export const createFooter = () => {
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

