const leftDeckRep = nodecg.Replicant('leftDeck');
const rightDeckRep = nodecg.Replicant('rightDeck');

const left_deckEl = document.getElementById('left_deck');
const right_deckEl = document.getElementById('right_deck');

leftDeckRep.on('change', (newVal) => {
    left_deckEl.innerHTML = newVal;
})

rightDeckRep.on('change', (newVal) => {
    right_deckEl.innerHTML = newVal;
})