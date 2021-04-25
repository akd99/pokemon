const nameplateEl = document.getElementById('nameplate')
const messageEl = document.getElementById('message')

pokemon.card.find('base1-4')
        .then(card => {
            console.log(card.name) // "Charizard"
        })

nodecg.listenFor('showLowerThird', (data) => {
    
    messageEl.innerHTML = data.message;

    const tl = gsap.timeline();


    tl.from([nameplateEl, messageEl], 1, {width:0})

    tl.to([nameplateEl, messageEl], 1, {width:0}, "+=4")

    tl.call(() =>{
        messageEl.innerHTML = "";
    })

    tl.set([nameplateEl, messageEl], {width: "", height:""})

})