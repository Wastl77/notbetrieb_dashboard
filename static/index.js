const startNewButton = document.getElementById('start-new');
const refreshButton = document.getElementById('refresh');

startNewButton.addEventListener('click', () =>
	fetch('http://localhost:8000/admin/start-session').then((res) =>
		console.log(res),
	),
);

refreshButton.addEventListener('click', () => {
	const divElement = document.getElementById('session-list');
	const orderedList = document.createElement('ul');

	fetch('http://localhost:8000/admin/get-sessions')
		.then((res) => res.json())
		.then((sessions) => createSessionList(sessions));

	function createSessionList(sessions) {
		for (const key in sessions) {
			const value = sessions[key];
			const listItem = document.createElement('li');
			listItem.textContent = `${key}: ${value}`;

			const buttonElement = document.createElement('button');
			buttonElement.textContent = 'Session starten';
			buttonElement.addEventListener('click', () => {
				fetch(
					`http://localhost:8000/admin/start-session?sessionName=${value}`,
				).then((res) => console.log(res));
			});
			listItem.appendChild(buttonElement);
			orderedList.appendChild(listItem);
		}
		divElement.appendChild(orderedList);
	}
});
