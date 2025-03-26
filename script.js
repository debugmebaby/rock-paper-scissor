function getComputerChoice() {
const randomIndex = Math.floor (Math.random() * 3);
if (randomIndex === 0){ return 'rock';}
else if (randomIndex ===1){ return 'paper';}
else{return 'scissors';}
}

function getHumanChoice () {
const userInput = prompt ("choose rock,paper or scissors") .toLowerCase();
return userInput;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  

    function playRound(humanChoice, computerChoice) {
    
      console.log(`You chose: ${humanChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
  
      
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
  
    
      console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
  
   
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice(); 
      const computerChoice = getComputerChoice();
  
      playRound(humanChoice, computerChoice);
    }
  
    
    if (humanScore > computerScore) {
      console.log(`You win the game! Final score: You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lose the game! Final score: You: ${humanScore}, Computer: ${computerScore}`);
    } else {
      console.log(`The game is a tie! Final score: You: ${humanScore}, Computer: ${computerScore}`);
    }
  }
  
  
  playGame();
