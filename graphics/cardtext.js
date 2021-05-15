const pokemonCardDisplayAbilityReplicant = nodecg.Replicant('display-ability');

nodecg.listenFor('displayAbility', ability => {
    const nameEl = document.getElementById('name');
    const cardTextEl = document.getElementById('cardtext');
    nameEl.innerHTML = ability.name;
    cardTextEl.innerHTML = ability.text;
    nodecg.log.info(ability.name);
    nodecg.log.info(ability.text);
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