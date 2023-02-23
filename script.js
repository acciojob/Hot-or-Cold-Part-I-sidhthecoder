// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// initialize previous guess and difference
let previousGuess = 0;
let previousDifference = 0;

function checkGuess() {
  // get user's guess
  const guess = Number(document.getElementById("guess").value);

  // check if the guess is correct
  if (guess === secretNumber) {
    document.getElementById("response").textContent = "Congratulations, you guessed the secret number!";
    return;
  }

  // check if this is the first guess
  if (previousGuess === 0) {
    previousGuess = guess;
    previousDifference = Math.abs(secretNumber - guess);
    document.getElementById("response").textContent = guess < secretNumber ? "Guess higher" : "Guess lower";
    return;
  }

  // calculate the difference between the current guess and the secret number
  const difference = Math.abs(secretNumber - guess);

  // compare with the previous difference and provide feedback
  if (difference < previousDifference) {
    document.getElementById("response").textContent = "Getting hotter! Guess " + (guess < previousGuess ? "higher" : "lower");
  } else {
    document.getElementById("response").textContent = "Getting colder! Guess " + (guess < secretNumber ? "higher" : "lower");
  }

  // update the previous guess and difference
  previousGuess = guess;
  previousDifference = difference;
}
