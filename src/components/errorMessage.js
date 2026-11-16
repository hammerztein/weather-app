export const showError = (message) => {
	const previousMessage = document.querySelector('#error-message');
	previousMessage?.remove();

	const errorMessage = document.createElement('dialog');
	errorMessage.className = 'error-message';
	errorMessage.id = 'error-message';

	errorMessage.innerHTML = `
        <div class="error-icon">
            <span class="material-symbols-outlined">
                cloud_alert
            </span>
        </div>

        <h2>Weather unavailable</h2>

        <p>${message}</p>

        <button>Okay</button>
    `;

	document.body.append(errorMessage);

	errorMessage.querySelector('button').addEventListener('click', () => {
		removeError();
	});

	errorMessage.showModal();
};

const removeError = () => {
	const errorMessage = document.querySelector('#error-message');
	errorMessage.remove();
};

