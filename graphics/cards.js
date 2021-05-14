const pokemonCardDisplayURLReplicant = nodecg.Replicant('display-card');
const cardLeftEl = document.getElementById('cardLeftReveal');
const cardRightEl = document.getElementById('cardRightReveal');
nodecg.listenFor('displayCardLeft', duration => {
    cardLeftEl.innerHTML = `<img width="323" height="450" src=${pokemonCardDisplayURLReplicant.value}>`;

    const tl = gsap.timeline({
        onComplete: function(){
            nodecg.log.info(duration);
            this.reverse();
        }
    });

    tl.from(".holderLeft", {duration: 1, y: 500}).from(".holderLeft img", {duration: 1, y: 500});
    tl.to(".holderLeft", {duration: 1, y: 0}).to(".holderLeft img", {duration: 5, y: 0});
    
    // tl
    //     .fromTo(".holder", {yPercent:100}, {duration: 5, yPercent:0})
    //     .fromTo(".holder img", {yPercent:0}, {duration: 5, yPercent: 0}, "<");

   // tl.fromTo(".holder", {yPercent:100}, {duration: 1, yPercent:0}).fromTo(".holder img", {yPercent:0}, {duration: 1, yPercent: 0}, "<");

    // cardTweet.call(() =>{
    //     cardEl.innerHTML = "";
    // })
    // tl
    //     .fromTo(".holder", {yPercent:100}, {duration: 1, yPercent:0})
    //     .fromTo(".holder img", {yPercent:0}, {duration: 1, yPercent: 0}, "<");
});

nodecg.listenFor('displayCardRight', duration => {
    cardRightEl.innerHTML = `<img width="323" height="450" src=${pokemonCardDisplayURLReplicant.value}>`;

    const tl = gsap.timeline({
        onComplete: function(){
            nodecg.log.info(duration);
            this.reverse();
        }
    });

    tl.from(".holderRight", {duration: 1, y: 500}).from(".holderRight img", {duration: 1, y: 500});
    tl.to(".holderRight", {duration: 1, y: 0}).to(".holderRight img", {duration: 5, y: 0});
});