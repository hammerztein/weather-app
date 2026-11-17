import { createFooter } from '../components/footer.js';
import { createHeader } from '../components/header.js';
import { createMainContainer } from '../components/mainContainer.js';

export const createWeatherView = (weatherData) => {
	const root = document.getElementById('root');
	const header = createHeader();
	const main = createMainContainer(weatherData);
	const footer = createFooter();
	root.innerHTML = '';
	root.append(header, main, footer);
};

