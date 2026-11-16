export const createFooter = () => {
	const footer = document.createElement('footer');
	footer.className = 'footer';
	const html = `
		<div>
			<small>
				© 2026
				<a href="https://github.com/hammerztein" target="_blank">hammerztein.</a>
				All rights reserved.
			</small>
		</div>
		<div>
			<small>
				<ul class="links">
					<li><a>Privacy Policy</a></li>
					<li><a>Terms of Service</a></li>
					<li><a>Data Sources</a></li>
				</ul>
			</small>
		</div>
	`;

	footer.innerHTML = html;
	return footer;
};

