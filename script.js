const inputEl = document.querySelector("#input-el");
const checkBtn = document.querySelector("#check-btn");
console.log(inputEl);
console.log(checkBtn);

// The Game variables
const inputEl = document.querySelector("#input-el");
const checkBtn = document.querySelector("#check-btn");


// the modal variables
// modal, the answer, x sign to close modal
// #1 select modal
const modal = document.querySelector("#myModal");
// #2 select the answer
const theAnswer = document.querySelector(".theAnswer");
// #3 select the x sign (close btn)
const closeBtn = document.querySelector(".close");


// Answers: "Correct, good work", "Incorrect, try again"
let answerOptions = ["Correct, good work", "Incorrect, try again"];


checkBtn.addEventListener("click", function() {
	modal.style.display = "block"

	let userInput = parseInt(inputEl.value);


	if (userInput === 2) {
		modal.style.background = "#2ecc71";
		theAnswer.textContent = userInput + " is " + answerOptions[0]
	}
	else if (userInput < 2 || userInput > 2) {
		modal.style.background = "#e74c3c";
		theAnswer.textContent = userInput + " is " + answerOptions[1]
	}

})
