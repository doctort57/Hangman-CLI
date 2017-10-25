
    //THE APP SHOULD END WHEN A PLAYER GUESSES THE CORRECT WORD OR RUNS OUT OF GUESSES.
    // game functions and inquirer nmpm
    var letter = require("./letter.js");
    var game = require("./game.js");
    var word = require("./word.js")
    var inquirer = require("inquirer");


    //THIS FUNCTION INITIATES THE WHOLE HANGMAN GAME WHERE IT CHECK IF A USER TYPES IN ANYTHING OTHER THAN A LETTER CHARACTER AND MARKS THEM INCORRECT
    //ALSO HAS HANDLING FOR WINNING AND LOSING AND RUNNING OUT OF TRYS. 
    function userGuess() {
        console.log(newWord.print());
        inquirer.prompt([{
            name: 'letter',
            type: 'text',
            message: 'Pick a letter any letter but only 1 letter PLEASE!:',
            validate: function(string) {
                var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                if (regEx.test(string)) {
                    return true;
                } else {
                    return false;
                    console.log("Please enter ONLY 1 letter at a time");

                }
            }
        }]).then(function(user) {
            console.log("================================================================");
            var letter = user.letter;
            newWord.checkLetter(letter);
            if (newWord.isLetterValid) {
                console.log("Sorry but you have already guessed that letter, please try a different one!");
                userGuess();
            } else {
                if (newWord.isComplete()) {
                    console.log("CORRECT! YOU WIN!!!!!!!!!! " + newWord.chosenWord + " was the hidden word!");
                    playAgain();
                } else if (newWord.trysLeft === 0) {
                    console.log("Sorry but you are all out of trys! The answer was " + " ' " + newWord.chosenWord + " ' ");
                    playAgain();
                } else {
                    console.log("You have " + newWord.trysLeft + " remaining trys left!");
                    console.log(".................................................................");
                    userGuess();
                }
            }
        });
    }

    //THIS FUNCTION HANDLES THE PLAY AGAIN FEATURE ALSO CONSOLE LOGS IF THEY WANT TO PLAY AGAIN BY HANDLING USER INPUT
    function playAgain() {
        inquirer.prompt([{
            type: 'input',
            message: 'Would you like to play again? Please type "y" for Yes and "n" for No',
            name: 'playAgain'
        }]).then(function(user) {
            var answer = user.playAgain;
            if (answer == 'y') {
                game.userPrompt(function() {
                    newWord = new word.Word(game.chosenWord);
                    userGuess();
                });
            } else if (answer === 'n') {
                console.log("Thank you for playing! I HOPE YOU ENJOYED THE GAME!");
                return;
            }
        })
    }


    game.userPrompt(function() {
        newWord = new word.Word(game.chosenWord);
        userGuess();
    });