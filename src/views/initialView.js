import { createInitialMainContainer } from '../components/initialContainer.js';
import { createFooter } from '../components/footer.js';

export const createInitialView = () => {
	const root = document.getElementById('root');
	const main = createInitialMainContainer();
	const footer = createFooter();

	root.append(main, footer);
};

