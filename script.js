function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

const resultsContainer = document.querySelector("#results");
const scoreContainer = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
  resultsContainer.textContent = ""; // Rensa tidigare resultat

  const roundResult = document.createElement("p");
  roundResult.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice}`;

  const outcome = document.createElement("p");

  if (humanChoice === computerChoice) {
    outcome.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  const scoreUpdate = `Score - You: ${humanScore}, Computer: ${computerScore}`;
  scoreContainer.textContent = scoreUpdate;

  resultsContainer.appendChild(roundResult);
  resultsContainer.appendChild(outcome);

  // Visa vinnaren när någon når 5
  if (humanScore === 5 || computerScore === 5) {
    const finalMessage = document.createElement("p");
    finalMessage.style.fontWeight = "bold";
    finalMessage.textContent =
      humanScore === 5
        ? "🎉 You won the game!"
        : "💀 Computer won the game!";
    resultsContainer.appendChild(finalMessage);

    // Inaktivera knappar efter spelet är klart
    document.querySelectorAll("button").forEach((btn) => {
      btn.disabled = true;
    });
  }
}

// Eventlisteners för knapparna
document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
