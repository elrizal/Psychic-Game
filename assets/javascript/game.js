//  Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose.
//Guess what letter I'm thinking of
//Wins: (# of times the user has guessed the letter correctly)
//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)**
//Guesses Left: (# of guesses left. This will update)**

//Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//player wins, increase the Wins counter and start the game over again (without refreshing the page).

// player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
 
var computerChoices = ["a", "b", "c", "d", "e"];
    
    var wins = 0;
    var losses = 0;
    var guesses = 0; //how to reach the max??? 
    var guessesLeft = 10; 
    var pastUserEntries = 0;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     var userTyped = document.getElementById("user-typed");

    document.onkeyup = function(event) {
     	var userGuess = event.key;
 	 	userText.textContent = event.key;
 	 	document.querySelector("#user-entries").innerHTML = ++pastUserEntries;
 	 	document.querySelector("#guessleft-entry").innerHTML = --guessesLeft;
 	
 	if (userGuess == computerGuess) {
 			document.querySelector("#loss-entries").innerHTML = ++losses;
 			reset();
 	}

 	if (userGuess !== computerGuess) {
		if (guesses === 10) {
    		alert("You loose!");
    		document.querySelector("#win-entries").innerHTML = ++wins;
    		reset();
		}
		else { 
			++guesses;}
 	}

 };

 function reset(){
 	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 	guesses = 0; guessesLeft = 10; pastUserEntries=0;
 }