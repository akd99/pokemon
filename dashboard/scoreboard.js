const p1ScoreRep = nodecg.Replicant('player1score', {defaultValue: 0});
const p2ScoreRep = nodecg.Replicant('player2score', {defaultValue: 0});

function updateScore(){
    const p1Input = document.getElementById('p1ScoreInput');
    const p2Input = document.getElementById('p2ScoreInput');
	p1ScoreRep.value = p1Input.value;
	p2ScoreRep.value = p2Input.value;
}

function resetScores(){
	p1ScoreRep.value = 0;
	p2ScoreRep.value = 0;
	document.getElementById('p1ScoreInput').value = "0";
	document.getElementById('p2ScoreInput').value = "0";
}