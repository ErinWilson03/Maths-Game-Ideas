/*
DICE GAME CONCEPT (May just be text boxes if I cant figure out the images)
-Two dice roll on screen with either a "X" or "/" and the user types in the answer of the equation

Using Math.floor(Math.random() * 6); I can get a random number from 0-5 repsresenting the dice faces with 0 actually being 6
=======================
PSEUDOCODE
=======================
::::	Declaring Variables	::::
score = 0
dice1 = 0
dice2 = 0

				::::	Explain the game	::::
PRINT 
"Click the 'roll' button to roll the dice and start the game
Each dice will show a random number, and you will multiply 		them to get the answer
 When you want to enter your answer, type it in the box and 	click the 'submit' button
 You will win the game when you hit 10 points!"

				::::	Starting the Game ::::
WHILE score<10 {

				::::	Rolling the dice for equation ::::
	dice1 = math.random * 6 + 1
	dice2 = math.random * 6 + 1

	equation = dice1 * dice2

				::::	Input and check answer	::::
	INPUT answer
	
	IF answer == equation 
		PRINT "Correct Answer! Next equation: "
		  score += 1
	ELSE 
		PRINT "Incorrect answer, pelase try again."
	 ENDIF
}

				::::	Ending the game	::::
PRINT "Congratulations! You got 10 answers correct!"
PRINT "Do you want to play again?"
BUTTON (Play again)
BUTTON (Back to home page)

*/
//set score variable
var score = 0;

//enter while loop
do {
	//set dice variables
	var num1 = Math.floor(Math.random() * 6 + 1);
	var num2 = Math.floor(Math.random() * 6 + 1);

	function roll() {

		//change the image and text value on screen to match the generated number
		document.querySelector(".img1").setAttribute("src",
			"images/dice" + num1 + ".png");
		document.querySelector(".number1").textContent = num1;

		document.querySelector(".img2").setAttribute("src",
			"images/dice" + num2 + ".png");
		document.querySelector(".number2").textContent = num2;
	}

	var equationAnswer = num1 * num2;


	//compare user input to correct equation answer
	function compare() {
		//get user's answer
		var userAnswer = document.getElementById("answer-box").value;

		if (userAnswer == equationAnswer) {
			//Tell the user they are correct
			alert("Correct answer!");
			score = score +1;
			document.getElementById("score").textContent = score;

		} else if (userAnswer != equationAnswer) {
			//Tell the user they are incorrect
			alert("Wrong answer! \nTry again!");
		}
		else {
			alert("issue");
		}
	}
} while (score < 3);