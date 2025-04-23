
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex === 0) {
      return 'rock';
  } else if (randomIndex === 1) {
      return 'paper';
  } else {
      return 'scissors';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;



  function playRound(humanChoice, computerChoice) {
      let resultMessage = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\n`;

      if (humanChoice === computerChoice) {
          resultMessage += "It's a tie!";
      } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
      ) {
          resultMessage += `You win! ${humanChoice} beats ${computerChoice}`;
          humanScore++;
      } else {
          resultMessage += `You lose! ${computerChoice} beats ${humanChoice}`;
          computerScore++;
      }

      resultMessage += `\nScore - You: ${humanScore}, Computer: ${computerScore}`;
      alert(resultMessage);
  }

  let finalMessage;
  if (humanScore > computerScore) {
      finalMessage = `You win the game! Final score: You: ${humanScore}, Computer: ${computerScore}`;
  } else if (computerScore > humanScore) {
      finalMessage = `You lose the game! Final score: You: ${humanScore}, Computer: ${computerScore}`;
  } else {
      finalMessage = `The game is a tie! Final score: You: ${humanScore}, Computer: ${computerScore}`;
  }

  alert(finalMessage);
}

playGame();
