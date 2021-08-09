let count = 0
function increment(){
	count = count + 1
	document.getElementById("count-el").innerText = count
}

function save(){
	let tmp = count + " - "
	document.getElementById("prev-entr").textContent += tmp    //innertext gives human readable thingies , " - " the last space not recognized so use textContent
	count = 0
	document.getElementById("count-el").innerText = count
}

