const player1Rep = nodecg.Replicant('player1name', {defaultValue: ""});
const player2Rep = nodecg.Replicant('Player2name', {defaultValue: ""});

player1Rep.on('change', (newVal) => {
	const left_nameEl = document.getElementById('p1NameDiv');
	left_nameEl.innerHTML = newVal;
})

player2Rep.on('change', (newVal) => {
	const right_nameEl = document.getElementById('p2NameDiv');
	right_nameEl.innerHTML = newVal;
})