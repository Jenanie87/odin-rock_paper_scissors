let playerScore = 0;
let ComputerScore = 0;

// User Selection

function capitalize(input) {
  let result = input.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

// Computer Selection

function getComputerChoice() {
    
    let randomComputerChoice = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let computerChoice = 
    randomComputerChoice[Math.floor(Math.random()*randomComputerChoice.length)];
    return computerChoice;
}

//Compare the choices and declare the winner

function showMessage(playerSelection, computerSelection) {
if ( (playerSelection === "Rock" && computerSelection === "Scissors") 
    || (playerSelection === "Paper" && computerSelection === "Rock")
    || (playerSelection === "Scissors" && computerSelection === "Paper") ) {
        playerScore++;
    alert (`You Win! ${playerSelection} beats ${computerSelection} :)`);
} else if ( (playerSelection === "Rock" && computerSelection === "Paper")
|| (playerSelection === "Paper" && computerSelection === "Scissors")
|| (playerSelection === "Scissors" && computerSelection === "Rock") ) {
    ComputerScore++;
    alert (`You Lose! ${computerSelection} beats ${playerSelection} :(`);
} else {
    alert ("Draw!");
}
}

function game() {
    let showUser = prompt('Choose "Rock", "Paper" or "Scissors":');
    let playerSelection = capitalize(showUser);

    let computerSelection = getComputerChoice();
    alert (`The Computer chooses ${computerSelection}`);
    showMessage(playerSelection, computerSelection);
}


for (let i = 0; i < 5; i++) {
    game();
}

// Show score

alert (`Players Score: ${playerScore} \nComputers Score: ${ComputerScore}`);