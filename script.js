function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

const resultsContainer = document.querySelector("#results");
const scoreContainer = document.querySelector("#score");
const playAgainButton = document.querySelector("#play-again");

function playRound(humanChoice, computerChoice) {
  resultsContainer.textContent = ""; // Töm tidigare resultat

  const roundResult = document.createElement("p");
  roundResult.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice}`;
  resultsContainer.appendChild(roundResult);

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

  resultsContainer.appendChild(outcome);

  scoreContainer.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const finalMessage = document.createElement("p");
    finalMessage.style.fontWeight = "bold";
    finalMessage.textContent = humanScore === 5
      ? "🎉 You won the game!"
      : "💀 Computer won the game!";
    resultsContainer.appendChild(finalMessage);

    document.querySelectorAll(".choice").forEach((btn) => btn.disabled = true);
    playAgainButton.style.display = "inline-block";
  }
}

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

playAgainButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  scoreContainer.textContent = "Score - You: 0, Computer: 0";
  resultsContainer.textContent = "";
  playAgainButton.style.display = "none";
  document.querySelectorAll(".choice").forEach((btn) => btn.disabled = false);
});
