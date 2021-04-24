const p1Rep = nodecg.Replicant('player1', {defaultValue: 0});
const p2Rep = nodecg.Replicant('player2', {defaultValue: 0});

const p1Input = document.getElementById('p1ScoreInput');
const p2Input = document.getElementById('p2ScoreInput');

function updateScore(){
	p1Rep.value = p1Input.value;
	p2Rep.value = p2Input.value;
}

function resetScores(){
	p1Rep.value = 0;
	p2Rep.value = 0;
	document.getElementById('p1ScoreInput').value = "0";
	document.getElementById('p2ScoreInput').value = "0";
}