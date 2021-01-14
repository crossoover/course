"use strict";

var words = ["ferrari", "mercedes", "bmw", "toyota", "lexus", "mazda", "peugeot", "renault", "lada", "mitsubishi", "nissan", "tesla", "audi", "lamborghini", "volkswagen"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var ramainingLetters = word.length;
var remainingAttempts = word.length * 2;
var start = confirm("Would you like to start?");

if (start === true) {
  while (ramainingLetters > 0 && remainingAttempts > 0) {
    var guess = prompt(answerArray.join(" ") + "\n\n" + " Guess letter or press CANCEL for exit.");

    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please, enter only ONE letter.");
    } else {
      for (var _i = 0; _i < word.length; _i++) {
        if (word[_i] === guess) {
          answerArray[_i] = guess;
          ramainingLetters--;
        }
      }
    }

    remainingAttempts--;

    if (remainingAttempts == 0) {
      alert("Game Over.");
    }
  }

  alert("Game Over\nThe word was " + word.toUpperCase() + ".");
} else {
  alert("Ok, bye!");
}