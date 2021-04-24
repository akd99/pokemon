const player1Rep = nodecg.Replicant('player1', {defaultValue: ""});
const player2Rep = nodecg.Replicant('Player2', {defaultValue: ""});

player1Rep.on('change', (newVal) => {
	const left_nameEl = document.getElementById('left_name');
	left_nameEl.innerHTML = newVal;
})

player2Rep.on('change', (newVal) => {
	const right_nameEl = document.getElementById('right_name');
	right_nameEl.innerHTML = newVal;
})