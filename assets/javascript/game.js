
var teamArray = [
				"Arizona Cardinals",
				"Los Angeles Rams",
				"Oakland Raiders",
				"San Diego Chargers",
				"San Francisco Forty-Niners",
				"Denver Broncos",
				"Jacksonville Jaguars",
				"Miami Dolphins",
				"Tampa Bay Buccaneers",
				"Atlanta Falcons",
				"Chicago Bears",
				"Indianapolis Colts",
				"New Orleans Saints",
				"Baltimore Ravens",
				"Washington Redskins",
				"New England Patriots",
				"Detroit Lions",
				"Minnesota Vikings",
				"Kansas City Chiefs",
				"New York Giants",
				"New York Jets",
				"Buffalo Bills",
				"Carolina Panthers",
				"Cincinnati Bengals",
				"Cleveland Browns",
				"Philadelphia Eagles",
				"Pittsburgh Steelers",
				"Tennessee Titans",
				"Dallas Cowboys",
				"Houston Texans",
				"Seattle Seahawks",
				"Green Bay Packers"
			];

			var solved = "";
			var placeHolder = "";
			

			
			$(document).ready(function() {
			
			//Word selection
			var random = Math.floor(Math.random()*teamArray.length);
			solved = teamArray[random].toUpperCase();
			
			
			console.log(solved);

			

			//Place Holder
	//for( var i = 0; i < solved.length; i++) {
				placeHolder = solved.replace(/[a-z]/gi, '-');

				
				document.getElementById("answer").innerHTML = placeHolder;
			
		});
			//Letter selection
			var lives = 11;
			document.onkeyup = function () {
				var guessed= event.key.toUpperCase();
				
			//Correct letters
			//Replace letter

				for(var i = 0; i < solved.length; i++) {
					if(guessed == solved.substring(i, i + 1)) {
					placeHolder = placeHolder.substring(0, i) + guessed + placeHolder.substring(i + 1, placeHolder.length + 1);
						document.getElementById("answer").innerHTML = placeHolder;
						console.log(placeHolder);
				}
				
			}

			// Turns Left
				
				if(document.getElementById("answer").innerHTML === placeHolder) {

					lives--;
					document.getElementById("result").innerHTML = lives;

					if(lives == 0) {
						alert("Game Over!");
					}
					
				
				

			// Guessed letters
				var guessedLetters = document.createElement("ul");
				var letter= document.createTextNode(guessed);
				guessedLetters.appendChild(letter);
				document.getElementById("letters").appendChild(guessedLetters);
				
			// Turns Left

				//var turnsLeft = document.createElement("ul");
				//var inCorrect = document.createTextNode(lives);
				//turnsLeft.appendChild(inCorrect);
				//document.getElementById("result").appendChild(turnsLeft);
			
			}
		};


			

		

		
						
			//$(document).ready(function() {

				//var randomNumber = Math.floor(Math.random()*teamArray.length);
				//var finalAnswer = teamArray[randomNumber];
				//$("#answer").html(finalAnswer);

			//});

			
	