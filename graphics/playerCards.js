const pokemonLeftPlayerImageURLReplicant = nodecg.Replicant('left-player-card');
const pokemonRightPlayerImageURLReplicant = nodecg.Replicant('right-player-card');

pokemonLeftPlayerImageURLReplicant.on('change', (newVal) => {
    const left_imageEl = document.getElementById('left_image');
    left_imageEl.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=${newVal}>`;
})

pokemonRightPlayerImageURLReplicant.on('change', (newVal) => {
    const right_imageEl = document.getElementById('right_image');
    right_imageEl.innerHTML = `<img src=${newVal}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
})