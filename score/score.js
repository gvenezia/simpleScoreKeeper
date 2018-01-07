// Javascript variables
var p1 = 0;
var p2 = 0;

var limit = 5;

// Html element variables
var h1 = document.querySelector("h1");
var p1button = document.querySelector("#b1");
var p2button = document.querySelector("#b2");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");

// Check for user inputted score
input.addEventListener("keyup", function() {
	limit = parseInt(input.value);
});

// Scoring Button Events
// Until the game is over, when user presses p1 or p2 button, add one to that score and update the score in h1
p1button.addEventListener("click", function() {
	p1++;
	h1.innerText = p1 + " to " + p2; 

	// If a player has won then change their score to green and disable the p1 and p2 scoring buttons
	if (p1 === limit) {
		h1.innerHTML = "<span style='color:green'>" + p1 + "</span>" + " to " + p2;
		document.querySelector("#b1").disabled = true; 
		document.querySelector("#b2").disabled = true; 
	}
});

p2button.addEventListener("click", function() {
	p2++;
	h1.innerText = p1 + " to " + p2; 

	if (p2 === limit) {
		h1.innerHTML = p1 + " to " + "<span style='color:green'>" + p2 + "</span>";
		document.querySelector("#b1").disabled = true; 
		document.querySelector("#b2").disabled = true; 
	}
});

reset.addEventListener("click", function() {
	p1 = 0;
	p2 = 0;
	h1.innerText = p1 + " to " + p2; 
	document.querySelector("#b1").disabled = false; 
	document.querySelector("#b2").disabled = false; 
});


