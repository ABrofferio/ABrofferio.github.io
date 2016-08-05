function win(){
	var aOne = document.getElementById("aOne").value;
	var bOne = document.getElementById("bOne").value;
	var cOne = document.getElementById("cOne").value;
	var aTwo = document.getElementById("aTwo").value;
	var bTwo = document.getElementById("bTwo").value;
	var cTwo = document.getElementById("cTwo").value;
	var aThree = document.getElementById("aThree").value;
	var bThree = document.getElementById("bThree").value;
	var cThree = document.getElementById("cThree").value;
	if (aOne == "X") {
		if (bOne == "X" && cOne == "X" || bTwo == "X" && cThree == "X" || aTwo == "X" && aThree == "X"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
	}
	else if (cThree == "X") {
		if (cTwo == "X" && cOne == "X" || bThree == "X" && aThree == "X"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
		
	}
	else if (bTwo == "X") {
		if (bOne == "X" && bThree == "X" || aTwo == "X" && cTwo == "X" || cOne == "X" && aThree == "X"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
	}
	if (aOne == "O") {
		if (bOne == "O" && cOne == "O" || bTwo == "O" && cThree == "O" || aTwo == "O" && aThree == "O"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
	}
	else if (cThree == "O") {
		if (cTwo == "O" && cOne == "O" || bThree == "O" && aThree == "O"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
		
	}
	else if (bTwo == "O") {
		if (bOne == "O" && bThree == "O" || aTwo == "O" && cTwo == "O" || cOne == "O" && aThree == "O"){
		document.getElementById("declaration").innerHTML="We have a winner!";
		}
	}
}

function geography(){
	
}
