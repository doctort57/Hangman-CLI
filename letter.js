	// constructor file for letters
	
	// this is a prototype which prints the letetr if correctly guessed else return a '-'
	Letter.prototype.printLetra = function() {
		// if letter found return it, else return '-'
	    if (this.show) {
	        return this.letter;
	    } else {
	        return '-';
	    }
	};


	// compares letter to blank space
	function Letter(letter) {
		// get letter
   	    this.letter = letter;
   	    // compare and set show status
	    if (this.letter == "") {
			 	this.show = true;
		} else {
			 	this.show = false;
	   }
	}

	// this will export the function letter to the file inquiring it

	module.exports = {
    	Letter
	};

