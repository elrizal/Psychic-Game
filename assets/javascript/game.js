//  Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose.
//Guess what letter I'm thinking of
//Wins: (# of times the user has guessed the letter correctly)
//Psuedo-code: Losses= (# of times the user has failed to guess the letter correctly after exhausting all guesses)**
//Guesses Left= (# of guesses left. This will update)**
//Guesses So Far=(the specific letters that the user typed. Display these until the user either wins or loses.)
// player wins, increase the Wins counter and start the game over again (without refreshing the page).
// player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "y", "w", "x", "z"];
    
    var wins = 0;
    var losses = 0;
    var guesses = 0; 
    var guessesLeft = 10; 
    var guessArray=[];
    var pastUserEntries = 0;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    document.onkeyup = function(event) {

     	var userGuess = event.key;
     	guessArray.push(userGuess);
 	 	
 	 	document.querySelector("#user-entries").innerHTML = ++pastUserEntries;
 	 	document.querySelector("#guessleft-entry").innerHTML = --guessesLeft;

 	 	var userText = document.getElementById("user-text");
        userText.textContent = guessArray;
      
 	
 	if (userGuess == computerGuess) {
 			document.querySelector("#loss-entries").innerHTML = ++losses;
 			alert("You win!");
 			reset();

 			}

 	if (userGuess !== computerGuess) {
 		++guesses;
		
		if (guesses === 10) {
    		alert("You loose!");
    		document.querySelector("#win-entries").innerHTML = ++wins;
    		reset();
		}
 	}

 };

 function reset(){
 	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 	console.log(computerGuess);
 	guesses = 0; guessesLeft = 10; pastUserEntries= 0;

 	//repeat

    document.onkeyup = function(event) {

     	var userGuess = event.key;
 	 	
 	 	document.querySelector("#user-entries").innerHTML = ++pastUserEntries;
 	 	document.querySelector("#guessleft-entry").innerHTML = --guessesLeft;

 	 	 	 	var userText = document.getElementById("user-text");
        
 	
 	if (userGuess == computerGuess) {
 			document.querySelector("#loss-entries").innerHTML = ++losses;
 			alert("You win!");
 			reset();

 			}

 	if (userGuess !== computerGuess) {
 		++guesses;
		
		if (guesses === 10) {
    		alert("You loose!");
    		document.querySelector("#win-entries").innerHTML = ++wins;
    		reset();
		}
 	}

 };
 }