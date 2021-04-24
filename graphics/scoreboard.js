const p1Rep = nodecg.Replicant('player1score', {defaultValue: 0});
const p2Rep = nodecg.Replicant('player2score', {defaultValue: 0});

p1Rep.on('change', (newVal) => {
	const p1El = document.getElementById('player1Prizes');
	p1El.innerHTML = newVal;
})

p2Rep.on('change', (newVal) => {
	const p2El = document.getElementById('player2Prizes');
	p2El.innerHTML = newVal;
})