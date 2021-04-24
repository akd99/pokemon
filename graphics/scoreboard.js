const p1ScoreRep = nodecg.Replicant('player1score', {defaultValue: 0});
const p2ScoreRep = nodecg.Replicant('player2score', {defaultValue: 0});

const p1El = document.getElementById('player1ScoreDiv');
const p2El = document.getElementById('player2ScoreDiv');

p1ScoreRep.on('change', (newVal) => {
	p1El.innerHTML = newVal;
})

p2ScoreRep.on('change', (newVal) => {
	p2El.innerHTML = newVal;
})