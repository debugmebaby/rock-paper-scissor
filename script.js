function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
//resultatet
let humanScore = 0;
let computerScore = 0;

//knappar för resultat och score
const resultsContainer = document.querySelector("#results");
const scoreContainer = document.querySelector("#score");

// själva funktionen per runda
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

  //själva score uppdateringen
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

    // stänger av  knappar efter spelet är slut
    document.querySelectorAll("button").forEach((btn) => {
      btn.disabled = true;
    });
  }
}

// Eventlisteners för knapparna
// Välj alla knappar med klassen "choice"
const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
