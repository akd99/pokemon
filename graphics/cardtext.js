const pokemonCardDisplayAbilityReplicant = nodecg.Replicant('display-ability');

const nameEl = document.getElementById('name');
const cardTextEl = document.getElementById('cardtext');

const rules = ['This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can\'t play this card.', '',
'You may play any number of Item cards during your turn.',
'You may play only 1 Supporter card during your turn (before your attack).',
'This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can\'t play this card.'];

nodecg.listenFor('displayAbility', cardData => {
    nameEl.innerHTML = "";
    cardTextEl.innerHTML = "";
    nameEl.innerHTML = cardData.abilities[0].name;
    cardTextEl.innerHTML = cardData.abilities[0].text;
    nodecg.log.info(cardData.abilities[0].name);
    nodecg.log.info(cardData.abilities[0].text);
    textFit(document.querySelector("#cardtext"));

    const tl = gsap.timeline({
        onComplete: function(){
            
           // this.reverse();
        }
    });

    tl.from("#wrapper",1, { y:0});

    tl.to("#wrapper",1, {y:-150});

    tl.to("#wrapper",1, {y:0}, "+=7");

});

nodecg.listenFor('displayTrainerText', cardData => {
    nameEl.innerHTML = "";
    cardTextEl.innerHTML = "";
    const filteredRules = cardData.rules.filter(line => !rules.includes(line));
    for (i = 0; i < filteredRules.length; i++){
        nodecg.log.info(filteredRules[i]);
    }
    nameEl.innerHTML = cardData.name;
    for (i = 0; i < filteredRules.length; i++){
        cardTextEl.insertAdjacentHTML('beforeend', `${filteredRules[i]} `);
    }
    textFit(document.querySelector("#cardtext"));
    const tl = gsap.timeline({
        onComplete: function(){
            
           // this.reverse();
        }
    });

    tl.from("#wrapper",1, { y:0});

    tl.to("#wrapper",1, {y:-150});

    tl.to("#wrapper",1, {y:0}, "+=7");
});