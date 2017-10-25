//THIS WILL REQUIRE THE "letter.js" FILE TO BE USED. 
var Letter = require('./letter.js');

// constructor function for handle trys left and gets chosen word
// also holds guesses and letters as well
	var Word = function(chosenWord) {
	    this.trysLeft = 10;
	    this.chosenWord = chosenWord;
	    this.letters = [];
	    this.guesses = [];
	    for (var i = 0; i < this.chosenWord.length; i++) {
	        this.letters.push(new Letter.Letter(this.chosenWord[i]));
	    }
	};

// prototype checks letters being passed
// updates trys Left if letter not valid
	Word.prototype.checkLetter = function(letter) {
	    this.notCorrect = true;
	    this.isLetterValid = false;
	    var letter = letter.toLowerCase();
	    if (this.guesses.indexOf(letter) != -1) {
	        this.isLetterValid = true;
	    } else {
	        this.guesses.push(letter);
	        for (var i = 0; i < this.letters.length; i++) {
	            if (this.letters[i].letter.toLowerCase() == letter) {
	                this.notCorrect = false;
	                this.letters[i].show = true;
	            }
	        }
	        if (this.notCorrect) {
	            this.trysLeft--;
	        }
	    }
	};

	// prototype check to see if word is complete and return true/false
	Word.prototype.isComplete = function() {
	    for (var i = 0; i < this.letters.length; i++) {
	        if (!this.letters[i].show) {
	            return false;;
	        }
	    }
	    return true;
	};

	// print output
	Word.prototype.print = function() {
	    var output = "";
	    for (var i = 0; i < this.letters.length; i++) {
	        output += this.letters[i].printLetra();
	    }
	    return output;
	};

	//THIS IS THE MODULE WHICH WILL TAKE THE WORD FUNCTION AND EXPORT IT. 
	module.exports = {
	    Word
	};