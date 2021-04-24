const player1Rep = nodecg.Replicant('playerOne', {defaultValue: ""});
const player2Rep = nodecg.Replicant('PlayerTwo', {defaultValue: ""});

const left_nameEl = document.getElementById('left_name');
const right_nameEl = document.getElementById('right_name');

player1Rep.on('change', (newVal) => {
	left_nameEl.innerHTML = newVal;
})

player2Rep.on('change', (newVal) => {
	right_nameEl.innerHTML = newVal;
})