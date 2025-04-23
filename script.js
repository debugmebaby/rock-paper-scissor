
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
       
      document.getElementById("results").innerHTML = resultMessage;
      document.getElementById("score").textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
  }
  document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });