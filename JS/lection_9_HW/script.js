let words = [
   "ferrari", "mercedes", "bmw",
   "toyota", "lexus", "mazda",
   "peugeot", "renault", "lada",
   "mitsubishi", "nissan", "tesla",
   "audi", "lamborghini", "volkswagen"
];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
   answerArray[i] = "_"
}

let ramainingLetters = word.length;
let remainingAttempts = word.length * 2;
let start = confirm("Would you like to start?");
if (start === true) {
   while (ramainingLetters > 0 && remainingAttempts > 0) {

      let guess1 = prompt(answerArray.join(" ") + "\n\n" + " Guess letter or press CANCEL for exit." + "\n\n" + "Attempts left: " + remainingAttempts);
      let guess = guess1.toLowerCase();
      if (guess === null) {
         break;
      } else if (guess.length !== 1) {
         alert("Please, enter only ONE letter.")
      } else {
         for (let i = 0; i < word.length; i++) {
            if (word[i] === guess && answerArray[i] == "_") {
               answerArray[i] = guess;
               ramainingLetters--;
            } else {
               continue;
            }
         }
         remainingAttempts--;
      }
      if (remainingAttempts == 0) {
         alert("Game Over.")
      }
   }
   alert("The word was " + word.toUpperCase() + ".")

} else {
   alert("Ok, bye!");
}