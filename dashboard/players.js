const player1Rep = nodecg.Replicant('playerOne', {defaultValue: ""});
const player2Rep = nodecg.Replicant('PlayerTwo', {defaultValue: ""});

function updatePlayers() {
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    player1Rep.value = player1Input.value;
	player2Rep.value = player2Input.value;
}