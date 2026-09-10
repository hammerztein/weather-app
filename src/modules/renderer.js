import { createInitialView } from '../views/initialView.js';

export const initalize = () => {
	const root = document.getElementById('root');
	createInitialView(root);
};

