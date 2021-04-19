

// TIMERS

var playTimer = 2000; //How much it takes for each ball to come out (2 seconds default)
var nextRoundDelay = 75000; // playTimer * 35
var nextRoundTimer = 1000; // 20 itterations * nextRoundTimer
var printTimeDelay = 20000; // nextRoundTimer * 20
var printTimeTimer = 100; // 60 itterations * printTimeTimer
var playDelay = 6000; // printTimeTimer * 60


//-----------------------------------------------------------------




var winnings = [10000, 7500, 5000, 2500, 1000, 500, 300,
200, 150, 100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10,
9, 8, 7, 6, 5, 4, 3, 2, 1]

var bubble = document.querySelector("#bubble p");
var totalWinings = 0;

function play() {
	
	//Numbers from 1-48
	var numbers = [];
	for (var i = 1; i < 49; i++) {
		numbers.push(i);
	}

	var winners = [];

	//Resets all bubbles
	for (var q = 1; q < 36 ; q++) {
		document.querySelector("#number" + q + " p").innerHTML = "";
		document.querySelector("#number" + q + " div").style.backgroundImage = "none";
	}
	for (let i = 1; i < 36; i++) {
		(function(index) {
			setTimeout(function() {
				document.querySelector("#randomButton").disabled = true;
				document.querySelector("#printButton").disabled = true;
				//Random number generator based on "numbers" array length
				var randomNumber = Math.floor(Math.random() * numbers.length);

				//Selected number stored
				//Selected number removed from "numbers" array
				var numberSelected = numbers[randomNumber];
				numbers.splice(randomNumber, 1);

				//Assigns generated number to small bubble by number
				var number = document.querySelector("#number" + i + " p");
				number.innerHTML = numberSelected;


				//Assigns generated number to bubble
				bubble.innerHTML = numberSelected;

				//Color assignment to numbers changing their background color
				var numberFrame = document.querySelector("#number" + i + " div");
				var bubbleFrame = document.querySelector("#bubble div");

				//Red
				if (numberSelected == 1 || numberSelected == 9 ||
					numberSelected == 17 || numberSelected == 25 ||
					numberSelected == 33 || numberSelected == 41) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/red.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/red.png')";
				}
				//Green
				else if (numberSelected == 2 || numberSelected == 10 ||
					numberSelected == 18 || numberSelected == 26 ||
					numberSelected == 34 || numberSelected == 42) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/green.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/green.png')";			}
				//Blue

				else if (numberSelected == 3 || numberSelected == 11 ||
					numberSelected == 19 || numberSelected == 27 ||
					numberSelected == 35 || numberSelected == 43) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/blue.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/blue.png')";
				}
				//Purple
				else if (numberSelected == 4 || numberSelected == 12 ||
					numberSelected == 20 || numberSelected == 28 ||
					numberSelected == 36 || numberSelected == 44) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/purple.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/purple.png')";
				}
				//Brown
				else if (numberSelected == 5 || numberSelected == 13 ||
					numberSelected == 21 || numberSelected == 29 ||
					numberSelected == 37 || numberSelected == 45) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/brown.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/brown.png')";				}
				//Yellow
				else if (numberSelected == 6 || numberSelected == 14 ||
					numberSelected == 22 || numberSelected == 30 ||
					numberSelected == 38 || numberSelected == 46) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/yellow.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/yellow.png')";
				}
				//Orange
				else if (numberSelected == 7 || numberSelected == 15 ||
					numberSelected == 23 || numberSelected == 31 ||
					numberSelected == 39 || numberSelected == 47) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/orange.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/orange.png')";
				}
				//Black
				else if (numberSelected == 8 || numberSelected == 16 ||
					numberSelected == 24 || numberSelected == 32 ||
					numberSelected == 40 || numberSelected == 48) {

					numberFrame.style.backgroundImage = "none"
					bubbleFrame.style.backgroundImage = "none"

					numberFrame.style.backgroundImage = "url('images/balls/black.png')";
					bubbleFrame.style.backgroundColor = "none";
					bubbleFrame.style.backgroundImage = "url('images/balls/black.png')";
				}


				// Number tracking
				for (var x = 0; x < numbersList.length; x++) {
					for (var y = 0; y < numbersList[x].length; y++) {
						if (numberSelected == numbersList[x][y]) {
							numbersCounter[x]++;

							// GOD only knows why I just couldn't do "x + 1" inside a selector but it bugged out too much
							var yplusone = y + 1;
							var xplusone = x + 1;
							document.querySelector(".boxes:nth-child(" + xplusone + ") .boxnumbers:nth-child(" + yplusone + ")").style.backgroundColor = "green";
						}
					}
				}
				// Prints wining numbers in console
				for (var j = 0; j < numbersCounter.length; j++) {
					if (numbersCounter[j] == 6) {
						console.log("Winner is " + numbersList[j] + " for amount of " + winnings[i - 6]);
						document.querySelector("#win-shower").innerHTML += "Winner is " + numbersList[j] + " for amount of " + winnings[i - 6] + "</br>";
						totalWinings += winnings[i - 6];
						numbersCounter.splice(j, 1);
						winners.push(numbersList[j]);
						numbersList.splice(j, 1);

					}
				}

				//Activates button when loop is finished
				if (i == 35) {
					console.log(winners);
					//Resets the game by deleting all previus numbers and scores
					numbersList.length = 0;
					numbersCounter.length = 0;
					console.log(totalWinings);

				}
			}, i * playTimer);
    	})(i);
	}

	setTimeout(function() {
		nextRound();
	}, nextRoundDelay);
}

var numbersList = [];
var numbersCounter = [];
var o = 0;
var p = 0;

//Checks if number given is between 1-48
//Makes sure that there are no repeating numbers.
//Marks numbers as printed by assigning them to new list (if true).
function numberChecker() {
	var newNumbers = [];
	var x = 0;
	for (var i = 1; i < 7; i++) {
		var numberValue = parseInt(document.querySelector("#print" + i).value);
		if (numberValue < 1 || numberValue > 48) {
			alert("Enter numbers from 1 - 48 only");
			break;
		}

		if (newNumbers.includes(numberValue)) {
			alert("Please dont repeat numbers");
			break;
		} else {
			newNumbers.push(numberValue);
			x++;
		}
		if (x == 6) {
			numbersList.push(newNumbers);
			numbersCounter.push(0);
			o++;
			var newBox = document.createElement("div");
			newBox.classList.add("newBox" + o, "boxes");
			document.querySelector("#playersBox").appendChild(newBox);
			for (var k = 0; k < 6; k++) {
				p++;
				var numberBox = document.createElement("div");
				numberBox.classList.add("numberBox" + p, "boxnumbers");
				newBox.appendChild(numberBox);
				numberBox.innerHTML = newNumbers[k];
			}
		}
	}
	//Clears numbers after printing
	for (var y = 1; y < 7; y++) {
		document.querySelector("#print" + y).value = "";
	}
	console.log(newNumbers);
	console.log(numbersList);
}


	// function for random number generation (self explanatory)
function randomNumber() {
	var randomNumbers = [];
	var randomNum = Math.floor(Math.random() * 48);
	for (var j = 0; j < 6; j++) {
		do {
			randomNum = Math.floor(Math.random() * 48) + 1;
		}
		while (randomNumbers.includes(randomNum) == true);

		randomNumbers.push(randomNum);
	}

	for (var i = 1; i < 7 ; i++) {
		document.querySelector("#print" + i).value = randomNumbers[i - 1];
	}

}
	// Prints multiple random numbers 
function multiRan() {
	var multiRandom = document.querySelector("#multiplyRandom");
	for (var i = 0; i < multiRandom.value ; i++) {
		randomNumber();
		numberChecker();
	}
}

// Next round function
// Clears all data from past round
// Activates printing
function nextRound() {
	for (let i = 1; i < 21; i++) {
		(function(index) {
			setTimeout(function() {
				
				bubble.innerHTML = 20 - i;
				document.querySelector("#bubble div").style.backgroundImage = "none";
				document.querySelector("#bubble div").style.color = "white";

				if (i == 20) {
					document.querySelector("#randomButton").disabled = false;
					document.querySelector("#printButton").disabled = false;

					document.querySelector("#playersBox").innerHTML = "";
					document.querySelector("#win-shower").innerHTML = "";
				}
			}, i * nextRoundTimer)
		})(i)
	}
	setTimeout(function() {
		printTime();
	}, printTimeDelay);
}


 // Designated time to print new numbers
function printTime() {
	for (let i = 1; i < 61; i++) {
		(function(index){
			setTimeout(function() {
				bubble.innerHTML = 60 - i;
			}, i * printTimeTimer)
		})(i)
	}

	setTimeout(function() {
		play();
	}, playDelay);
}

printTime();