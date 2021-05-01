const queryInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const searchResults = document.querySelector('#searchResults');
const searchResultsAbilites = document.querySelector('#searchResultsAbilites');
const pokemonResultsReplicant = nodecg.Replicant('pokemon-results');
const pokemonCardResultsReplicant = nodecg.Replicant('pokemon-card-results');


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
            nodecg.log.info(query);
            nodecg.log.info('new value: ' + newValue);
            nodecg.log.info('old value: ' + oldValue);
            nodecg.log.info(newValue.length);
            resultsArray = newValue;
        });
        $('#select-card')[0].selectize.clearOptions(true);
        callback(resultsArray);
    }
});

function getValue() {
    nodecg.log.info($('#select-card')[0].selectize.getValue());
}