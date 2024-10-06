const prompt = require('prompt-sync')({sigint: true});

var playGame = () => {
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;
  console.log(numberInMind)

  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;


  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    let userGuess = prompt('Guess a number between 1 and 100: ');

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (userGuess === numberInMind.toString()) {
      console.log('You won!');
      break;
    }
    else if (userGuess !== numberInMind.toString()) {
      if (userGuess > numberInMind) {
        console.log('Too large!');
      } else {
        console.log('Too small!');
      }
    }
  }

  // Bonus Point: prompt user and provide option for user to start a new game after winning
  let playAgain = prompt('Would you like to play again? (Y/N): ');
  if(playAgain === "Y" || playAgain === "y"){
    playGame();
  } else {
    process.exit();
  }
}

playGame();