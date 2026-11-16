import { createFooter } from '../components/footer.js';
import { createHeader } from '../components/header.js';
import { createMainContainer } from '../components/mainContainer.js';

export const createWeatherView = (weatherData) => {
	const root = document.getElementById('root');
	root.innerHTML = '';
	const header = createHeader();
	const main = createMainContainer(weatherData);
	const footer = createFooter();
	root.append(header, main, footer);
};

