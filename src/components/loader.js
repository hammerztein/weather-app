export const showLoader = () => {
	const loader = document.createElement('div');
	loader.className = 'loader';
	const html = `<p>Loading weather data...</p>`;
	loader.innerHTML = html;
	document.body.append(loader);
};

export const removeLoader = () => {
	document.querySelector('.loader')?.remove();
};

