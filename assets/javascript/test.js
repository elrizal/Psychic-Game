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
      
 	console.log(guessArray);
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