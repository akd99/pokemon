'use strict';
const axios = require('axios');
const pokemon = require('pokemontcgsdk');
pokemon.configure({apiKey: 'f4611634-9596-4386-9d93-9b55e200f91d'});
module.exports = function (nodecg) {

	const pokemonResultsReplicant = nodecg.Replicant('pokemon-results');
	const pokemonCardResultsReplicant = nodecg.Replicant('pokemon-card-results');
	nodecg.listenFor('pokemonSearch', async nameSearch =>{
		try {
			const result = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${nameSearch}"`)
			pokemonResultsReplicant.value = result.data.data;
			nodecg.log.info(pokemonResultsReplicant.value[0]);
		} catch (error) {
			nodecg.log.error(error);
		}
	});
	nodecg.listenFor('pokemonCardSearch', async nameSearch =>{
		try {
			const result = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:"${nameSearch}"`)
			pokemonCardResultsReplicant.value = result.data.data;
			//nodecg.log.info(pokemonCardResultsReplicant.value[0]);
			//nodecg.log.info(nameSearch);
		} catch (error) {
			nodecg.log.error(error);
		}
	});
};
