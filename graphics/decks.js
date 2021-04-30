const leftDeckRep = nodecg.Replicant('leftDeck');
const rightDeckRep = nodecg.Replicant('rightDeck');

pokemon.card.find('base1-4')
.then(card => {
    console.log(card.name) // "Charizard"
})

leftDeckRep.on('change', (newVal) => {
    const left_deckEl = document.getElementById('left_deck');
    left_deckEl.innerHTML = newVal;
})

rightDeckRep.on('change', (newVal) => {
    const right_deckEl = document.getElementById('right_deck');
    right_deckEl.innerHTML = newVal;
})