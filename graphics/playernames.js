// import {gsap} from '../node_modules/gsap/index.js';
const leftNameRep = nodecg.Replicant('leftName');
const rightNameRep = nodecg.Replicant('rightName');
//const rightLocationRep = nodecg.Replicant('rightLocation');
//const leftLocationRep = nodecg.Replicant('leftLocation');

const left_nameEl = document.getElementById('left_name');
//const left_locationEl = document.getElementById('left_location');
const right_nameEl = document.getElementById('right_name');
//const right_locationEl = document.getElementById('right_location');

leftNameRep.on('change', (newVal) => {
	left_nameEl.innerHTML = newVal;
})

rightNameRep.on('change', (newVal) => {
	right_nameEl.innerHTML = newVal;
})

//leftLocationRep.on('change', (newVal) => {
//	left_locationEl.innerHTML = newVal;
//})
//
//rightLocationRep.on('change', (newVal) => {
//	right_locationEl.innerHTML = newVal;
//})
