const player1NameRep = nodecg.Replicant('player1name', {defaultValue: ""});
const player2NameRep = nodecg.Replicant('Player2name', {defaultValue: ""});

player1NameRep.on('change', (newVal) => {
	const left_nameEl = document.getElementById('p1NameDiv');
	left_nameEl.innerHTML = newVal;
})

player2NameRep.on('change', (newVal) => {
	const right_nameEl = document.getElementById('p2NameDiv');
	right_nameEl.innerHTML = newVal;
})