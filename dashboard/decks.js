const leftDeckRep = nodecg.Replicant('leftDeck', {defaultValue: ""});
const rightDeckRep = nodecg.Replicant('rightDeck', {defaultValue: ""});

function updateDeck() {
    const left_deckInput = document.getElementById('left_deck');
    const right_deckInput = document.getElementById('right_deck');
    leftDeckRep.value = left_deckInput.value;
	rightDeckRep.value = right_deckInput.value;
}