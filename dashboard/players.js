const player1NameRep = nodecg.Replicant('player1name', {defaultValue: ""});
const player2NameRep = nodecg.Replicant('Player2name', {defaultValue: ""});

function updatePlayers() {
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    player1NameRep.value = player1Input.value;
	player2NameRep.value = player2Input.value;
}