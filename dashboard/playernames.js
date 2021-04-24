const leftNameRep = nodecg.Replicant('leftName');
const rightNameRep = nodecg.Replicant('rightName');
//const rightLocationRep = nodecg.Replicant('rightLocation');
//const leftLocationRep = nodecg.Replicant('leftLocation');

//const leftNameOverallRep = nodecg.Replicant('leftNameOverall');
//const rightNameOverallRep = nodecg.Replicant('rightNameOverall');

function update() {
//	leftNameOverallRep.value = left_nameInput.value;
//	rightNameOverallRep.value = right_nameInput.value;
	const left_nameInput = document.getElementById('left_name');
	const right_nameInput = document.getElementById('right_name');
	leftNameRep.value = left_nameInput.value;
	rightNameRep.value = right_nameInput.value;
//	leftLocationRep.value = left_locationInput.value;
//	rightLocationRep.value = right_locationInput.value;

}

