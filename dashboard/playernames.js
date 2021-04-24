const leftNameRep = nodecg.Replicant('leftName');
const rightNameRep = nodecg.Replicant('rightName');

function update() {
	const left_nameInput = document.getElementById('left_name');
	const right_nameInput = document.getElementById('right_name');
	leftNameRep.value = left_nameInput.value;
	rightNameRep.value = right_nameInput.value;
}

