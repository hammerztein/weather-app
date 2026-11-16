const createHumidityCard = (humidity) => {
	const html = `
		<article class="card">
			<div class="card-title">
				<span class="material-symbols-outlined">humidity_mid</span>
				<p class="small bold">Humidity</p>
			</div>
			<h4 class="insight-data">${humidity}%</h4>
		</article>
	`;

	return html;
};

const createWindCard = (windspeed) => {
	const html = `
		<article class="card">
			<div class="card-title">
				<span class="material-symbols-outlined">air</span>
				<p class="small bold">Wind</p>
			</div>
			<h4 class="insight-data">${windspeed} km/h</h4>
		</article>
	`;

	return html;
};

const createUVIndexCard = (UVIndex) => {
	const html = `
		<article class="card">
			<div class="card-title">
				<span class="material-symbols-outlined">sunny</span>
				<p class="small bold">UV Index</p>
			</div>
			<h4 class="insight-data">${UVIndex}</h4>
		</article>
	`;

	return html;
};

const createSunriseSunsetCard = (sunrise, sunset) => {
	const html = `
		<article class="card">
			<div class="card-title">
				<span class="material-symbols-outlined">wb_twilight</span>
				<p class="small bold">Sunrise & Sunset</p>
			</div>
			<div class="timestamps">
				<h4>${sunrise}</h4>
				<h4>${sunset}</h4>
			</div>
		</article>
	`;

	return html;
};

export const createWeatherInsights = (weatherInsightData) => {
	const section = document.createElement('section');
	section.className = 'weather-section';
	const html = `
		<h3>Weather Insights</h3>
		<div class="cards">
			${createHumidityCard(weatherInsightData.humidity)}
			${createWindCard(weatherInsightData.windspeed)}
			${createUVIndexCard(weatherInsightData.uvindex)}
			${createSunriseSunsetCard(
				weatherInsightData.sunrise,
				weatherInsightData.sunset,
			)}
		</div>
	`;

	section.innerHTML = html;
	return section;
};

