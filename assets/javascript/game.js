
//var wrongWords = [];
//var randomWordSplitFunc = randomWord();//issue here
//var underScoreVar;
//var placeHolderVar;
//var userInputKey;

//html changes May need to change this
//var wrongWordTxt = document.getElementById('letters');
//var rightWordTxt = document.getElementById('answer');
//var livesTxt = document.getElementById('result');
//var loseTxt = document.getElementById('lose');
//var winTxt = document.getElementById('win');
//var wrongCount = 10;

			

//new script below		
//function randomNumber(){

//function randomWord() {
	//var randomWord = teamArray[randomNumber()];
	//var randomWordSplit = randomWord.split('');
	//return randomWordSplit;
	//}
			

	

//function checkRightWord(underScore) {
	//for(var i = 0, x = 1; i < randomWordSplitFunc.length; i++, x++) {
		//if(userInputKey === randomWordSplitFunc[i]) {
			//underScore.fill(userInputKey,i,x);
		//	placeHolder.fill(userInputKey,i,x)
			//may need to change underneath
			//rightWordTxt.textContent = underScoreVar;
			//document.getElementById("answer").innerHTML = placeHolder;
			//for(var i = 0; i < solved.length; i++) {
				//	if(guessed == solved.substring(i, i + 1)) {
					//placeHolder = placeHolder.substring(0, i) + guessed + placeHolder.substring(i + 1, placeHolder.length + 1);
					//	document.getElementById("answer").innerHTML = placeHolder;
					//	console.log(placeHolder);
//		}
//	}
//}

//function wrongWord() {
	//wrongWords.push(userInputKey);
//	wrongWordTxt.textContent = wrongWords;
//	wrongCount--;
//	livesTxt.textContent = wrongCount;
//}
////function checkWord()
//{
	//if (randomWordSplitFunc.indexOf(userInputKey) > -1) {
		//checkRightWord(underScoreVar);
		//checkRightWord(placeHolderVar);
		//winGameOver();
	//} else {
		//wrongWord();
		//loseGameOver();
	//}
//}
//function loseGameOver(){
	//if(wrongCount === 0) {
		//loseTxt.textContent = "You got Sacked!! Hit Play Again."
	//}
//}	
//function reset() {
	//wrongCount = 10;
	//livesTxt.textContent = wrongCount;
	//randomWord();
	//underScoreVar = makeUnderScore();

//}
//function winGameOver(){
	//if (randomWordSplitFunc.join() === underScoreVar.join()) {
	//	if (randomWordSplitFunc.join() === placeHolderVar.join()) {
		//winTxt.textContent = "Spike that Ball!!! You Win!!"
		//reset();
		//start();
	//}
//}

			
//------My Code Under Here ---------
			//Place Holder
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
			var lives = 10;
			var guessedArray = [];

			
			$(document).ready(function() {
			
			//Word selection
			var random = Math.floor(Math.random()*teamArray.length);
			solved = teamArray[random].toUpperCase();
			//Place Holder
	//for( var i = 0; i < solved.length; i++) {
				placeHolder = solved.replace(/[a-z]/gi, '-');
				document.getElementById("answer").innerHTML = placeHolder;
			
		});
			//Letter selection
			
			
				
			//Correct letters
			//Replace letter
function letter(isGuessed){
				if(isGuessed) {
					return;
				}
				var guessed = event.key.toUpperCase();
				for(var i = 0; i < solved.length; i++) {
					if(guessed == solved.substring(i, i + 1)) {
					placeHolder = placeHolder.substring(0, i) + guessed + placeHolder.substring(i + 1, placeHolder.length + 1);
						document.getElementById("answer").innerHTML = placeHolder;
					}
				}
				
			
		}

			// Turns Left

function turnsLeft () {
				if(document.getElementById("answer").innerHTML === placeHolder) {
					lives--;
					document.getElementById("result").innerHTML = lives;
					

					if(lives <= 0) {
						alert("You got sacked!  Game Over!");
					}
				}
			}
			
function isAlreadyGuessed() {
	var guessed = event.key.toUpperCase();
	if(guessedArray.indexOf(guessed) === -1) {
		return false;
	}
	return true;
}
				
				

			// Guessed letters
	function display (isGuessed) {
		if(isGuessed) {
			return;
		}
				var guessed = event.key.toUpperCase();
				var guessedLetters = document.createElement("ul");
				var letter= document.createTextNode(guessed);
				guessedLetters.appendChild(letter);
				document.getElementById("letters").appendChild(guessedLetters);
				guessedArray.push(guessed)
			}
			
		

		document.onkeyup = function () {
				var guessed= event.key.toUpperCase();
				turnsLeft();
				var isAlreadyGuessedVal = window.isAlreadyGuessed();
				letter(isAlreadyGuessedVal);
				display(isAlreadyGuessedVal);

			}
	
				
			// Turns Left

				//var turnsLeft = document.createElement("ul");
				//var inCorrect = document.createTextNode(lives);
				//turnsLeft.appendChild(inCorrect);
				//document.getElementById("result").appendChild(turnsLeft);
			
			
		


			

		

		
						
			//$(document).ready(function() {

				//var randomNumber = Math.floor(Math.random()*teamArray.length);
				//var finalAnswer = teamArray[randomNumber];
				//$("#answer").html(finalAnswer);

			//});
