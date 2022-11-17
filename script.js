let humanScore = 0
let computerScore = 0
let currentRoundNumber = 1

// Write your code below:
const generateTarget = function () {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = function (humanGuess, computerGuess, targetGuess) {
  let humanGuessDiff = Math.abs(targetGuess - humanGuess);
  let computerGuessDiff = Math.abs(targetGuess - computerGuess);
  return humanGuessDiff <= computerGuessDiff;
}

const updateScore = function (winner) {
  if (winner === 'computer') {
    computerScore++;
  } else if (winner === 'human') {
    humanScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
