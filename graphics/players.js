const player1Rep = nodecg.Replicant('playerOne', {defaultValue: ""});
const player2Rep = nodecg.Replicant('PlayerTwo', {defaultValue: ""});

player1Rep.on('change', (newVal) => {
	const left_nameEl = document.getElementById('left_name');
	left_nameEl.innerHTML = newVal;
})

player2Rep.on('change', (newVal) => {
	const right_nameEl = document.getElementById('right_name');
	right_nameEl.innerHTML = newVal;
})