const p1prizeRep = nodecg.Replicant('p1Prize');
const p2prizeRep = nodecg.Replicant('p2Prize');

	const player1prizeInput = document.getElementById('p1p')
	const player2prizeInput = document.getElementById('p2p')

function updatePrizes() {
	p1prizeRep.value = player1prizeInput.value;
	p2prizeRep.value = player2prizeInput.value;
}

function resetPrizes(){
	p1prizeRep.value = 0;
	p2prizeRep.value = 0;
	document.getElementById('p1p').value = 0;
	document.getElementById('p2p').value = 0;
}