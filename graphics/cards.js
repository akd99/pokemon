const pokemonCardDisplayURLReplicant = nodecg.Replicant('display-card');
const cardEl = document.getElementById('cardReveal');

nodecg.listenFor('displayCard', duration => {
    cardEl.innerHTML = `<img width="323" height="450" src=${pokemonCardDisplayURLReplicant.value}>`;

    const tl = gsap.timeline({
        onComplete: function(){
            nodecg.log.info(duration);
            this.reverse();
        }
    });

    tl.from(".holder", {duration: 1, y: 500}).from(".holder img", {duration: 1, y: 500});
    tl.to(".holder", {duration: 1, y: 0}).to(".holder img", {duration: 5, y: 0});
    
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