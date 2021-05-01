'use strict';
const axios = require('axios');
module.exports = function (nodecg) {
	const pokemonCardResultsReplicant = nodecg.Replicant('pokemon-card-results');
	const pokemonCardGetReplicant = nodecg.Replicant('pokemon-card-get');
	nodecg.listenFor('pokemonCardSearch', async nameSearch =>{
		try {
			const result = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${nameSearch}"&orderBy=-set.releaseDate`)
			pokemonCardResultsReplicant.value = result.data.data;
		} catch (error) {
			nodecg.log.error(error);
		}
	});

	nodecg.listenFor('pokemonCardGet', async cardID => {
		try {
			const result = await axios.get(`https://api.pokemontcg.io/v2/cards/${cardID}`)
			pokemonCardGetReplicant.value = result.data.data;
		} catch (error) {
			nodecg.log.error(error);
		}
	});
};
