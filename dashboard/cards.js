const pokemonCardResultsReplicant = nodecg.Replicant('pokemon-card-results');
const pokemonCardGetReplicant = nodecg.Replicant('pokemon-card-get');
var cardData = '';

//replicants for card data sent to graphics
const pokemonLeftPlayerImageURLReplicant = nodecg.Replicant('left-player-card');
const pokemonRightPlayerImageURLReplicant = nodecg.Replicant('right-player-card');
const pokemonCardDisplayURLReplicant = nodecg.Replicant('display-card');
const pokemonCardDisplayAbilityReplicant = nodecg.Replicant('display-ability');

//card document inserts
const nameIDEl = document.getElementById('cardNameID');
const cardThumbEl = document.getElementById('cardThumbnail');
const abilitiesEl = document.getElementById('abilities');
const attacksEl = document.getElementById('attacks');
const trainerTextEl = document.getElementById('trainerText');

$('#select-card').selectize({
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    options: [],
    create: false,
    persist: false,
    loadThrottle: 200,
    render: {
        option: function(item, escape) {
            return '<div>' +
                '<img height=70 width=50 src="' + escape(item.images.small) + '" alt="">' +
                '<span class="title">' +
                    '<span class="name">' + escape(item.name) + ' - ' + escape(item.id) + '</span>' +
                '</span>' +
            '</div>';
        }
    },
    load: function(query, callback) {
        var resultsArray = '';
        nodecg.sendMessage('pokemonCardSearch', query);
        pokemonCardResultsReplicant.on('change', (newValue, oldValue) => {
            resultsArray = newValue;
        });
        $('#select-card')[0].selectize.clearOptions(true);
        callback(resultsArray);
    }
});

function getCard() {
    const cardID = $('#select-card')[0].selectize.getValue();
    nodecg.sendMessage('pokemonCardGet', cardID);
}

pokemonCardGetReplicant.on('change', (newValue, oldValue) => {
    if (!newValue) {
        return;
    }
    document.getElementById("abilityButton").disabled = true;
    document.getElementById("attackButton").disabled = true;
    document.getElementById("trainerTextButton").disabled = true;
    abilitiesEl.innerHTML = '';
    attacksEl.innerHTML = '';
    trainerTextEl.innerHTML = '';
    cardData = newValue;
    nameIDEl.innerHTML = `${cardData.name} - ${cardData.id}`;
    cardThumbEl.innerHTML = `<img width=125 height=174 src="${cardData.images.small}">`;
    if (cardData.supertype == 'Pokémon') {
        if (typeof cardData.abilities === 'undefined') {
            abilitiesEl.innerHTML = 'N/A';
        } else {
            document.getElementById("abilityButton").disabled = false;
            abilitiesEl.innerHTML = `${cardData.abilities[0].name} - ${cardData.abilities[0].text}`;
        }
        for (i = 0; i < cardData.attacks.length; i++){
            attacksEl.insertAdjacentHTML('beforeend', `${i}: ${cardData.attacks[i].name} - ${cardData.attacks[i].text} - ${cardData.attacks[i].damage}<br><br>`);
        }
        document.getElementById("attackButton").disabled = false;
    } else if(cardData.supertype == 'Trainer') {
         for (i = 0; i < cardData.rules.length; i++){
             trainerTextEl.insertAdjacentHTML('beforeend', `${i}: ${cardData.rules[i]}<br>`);
         }
         document.getElementById("trainerTextButton").disabled = false;
    } else if (cardData.supertype == 'Energy') {

    } else {
        return;
    }
});

function buttonTest(){
    nodecg.log.info('button works');
}

function setLeftPlayerImage(){
    pokemonLeftPlayerImageURLReplicant.value = cardData.images.small;
    nodecg.log.info(pokemonLeftPlayerImageURLReplicant.value);
}

function setRightPlayerImage(){
    pokemonRightPlayerImageURLReplicant.value = cardData.images.small;
    nodecg.log.info(pokemonRightPlayerImageURLReplicant.value);
}

function displayCardToStreamLeft(){
    pokemonCardDisplayURLReplicant.value = cardData.images.large;
    const duration = 5;
    nodecg.sendMessage('displayCardLeft', duration);
}

function displayCardToStreamRight(){
    pokemonCardDisplayURLReplicant.value = cardData.images.large;
    const duration = 5;
    nodecg.sendMessage('displayCardRight', duration);
}

function displayAbilityToStream(){
    nodecg.sendMessage('displayAbility', cardData);
}

function displayTrainerTextToStream(){
    nodecg.sendMessage('displayTrainerText', cardData);
}