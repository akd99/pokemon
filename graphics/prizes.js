const p1prizeRep = nodecg.Replicant('p1Prize');
const p2prizeRep = nodecg.Replicant('p2Prize');

    const leftPrize1El = document.getElementById('leftPrize1');
    const leftPrize2El = document.getElementById('leftPrize2');
    const leftPrize3El = document.getElementById('leftPrize3');
    const leftPrize4El = document.getElementById('leftPrize4');
    const leftPrize5El = document.getElementById('leftPrize5');
    const leftPrize6El = document.getElementById('leftPrize6');

    const rightPrize1El = document.getElementById('rightPrize1');
    const rightPrize2El = document.getElementById('rightPrize2');
    const rightPrize3El = document.getElementById('rightPrize3');
    const rightPrize4El = document.getElementById('rightPrize4');
    const rightPrize5El = document.getElementById('rightPrize5');
    const rightPrize6El = document.getElementById('rightPrize6');

p1prizeRep.on('change', (newVal) => {
    if (newVal == 0) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 1) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 2) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 3) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 4) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballred.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 5) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballred.png width=50 height=50>";
    } else if (newVal == 6) {
        leftPrize1El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize2El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize3El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize4El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize5El.innerHTML = "&nbsp;<img src=pokeballbw.png width=50 height=50>";
        leftPrize6El.innerHTML = "<img src=pokeballbw.png width=50 height=50>";
    }
})

p2prizeRep.on('change', (newVal) => {
    if (newVal == 0) {
        rightPrize1El.innerHTML = "<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 1) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 2) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 3) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 4) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 5) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballred2.png width=50 height=50>";
    } else if (newVal == 6) {
        rightPrize1El.innerHTML = "<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize2El.innerHTML = "&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;&nbsp;";
        rightPrize3El.innerHTML = "&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;&nbsp;";
        rightPrize4El.innerHTML = "&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;&nbsp;";
        rightPrize5El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>&nbsp;";
        rightPrize6El.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=pokeballbw2.png width=50 height=50>";
    }
})