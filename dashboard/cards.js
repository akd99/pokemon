const queryInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const searchResults = document.querySelector('#searchResults');
const searchResultsAbilites = document.querySelector('#searchResultsAbilites');
const pokemonResultsReplicant = nodecg.Replicant('pokemon-results');

searchButton.onclick = () => {
    nodecg.sendMessage('pokemonSearch', queryInput.value);
};

pokemonResultsReplicant.on('change', (newValue, oldValue) =>{
    if (!newValue) {
        return;
    }

    searchResults.innerHTML = '';
    searchResultsAbilites.innerHTML = '';

    newValue.forEach(result => {
        searchResults.insertAdjacentHTML('beforeend', `<div><a href="${result.images.large}">${result.name} - ${result.id}</a></div>`);
        // if (!!result.abilities){
        //     searchResultsAbilites.insertAdjacentHTML('beforeend', `<div>${result.abilities[0].name} - ${result.abilities[0].text}</div>`);
        // } else {
        //     searchResultsAbilites.innerHTML = '';
        // };
    });
});