export const showLoader = () => {
	const loader = document.createElement('div');
	loader.className = 'loader';
	const html = `<p>Loading weather data...</p>`;
	loader.innerHTML = html;
	const root = document.getElementById('root');
	root.append(loader);
};

export const removeLoader = () => {
	document.querySelector('.loader').remove();
};

