// Add 3 buttons

const startButton = document.querySelector(".btn");
const threeButtons = document.querySelector(".selection");
startButton.addEventListener("click", () => {
    threeButtons.style.display = "flex";
    startButton.remove();
}
)

let playerScore = 0;
let ComputerScore = 0;

// User Selection


const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function(event) {
    buttonAnimation(rockButton);
    console.log(event.target.innerText);
})

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function(event) {
    buttonAnimation(paperButton);
    console.log(event.target.innerText);
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function(event) {
    buttonAnimation(scissorsButton);
    console.log(event.target.innerText);
})
/* function capitalize(input) {
  let result = input.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
} */

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
if ( (playerSelection === rockButton && computerSelection === "Scissors") 
    || (playerSelection === paperButton && computerSelection === "Rock")
    || (playerSelection === scissorsButton && computerSelection === "Paper") ) {
        playerScore++;
    alert (`You Win! ${playerSelection} beats ${computerSelection} :)`);
} else if ( (playerSelection === rockButton && computerSelection === "Paper")
|| (playerSelection === paperButton && computerSelection === "Scissors")
|| (playerSelection === scissorsButton && computerSelection === "Rock") ) {
    ComputerScore++;
    alert (`You Lose! ${computerSelection} beats ${playerSelection} :(`);
} else {
    alert ("Draw!");
}
}

function game() {
/*     let showUser = prompt('Choose "Rock", "Paper" or "Scissors":');
    let playerSelection = capitalize(showUser); */

    let computerSelection = getComputerChoice();
    alert (`The Computer chooses ${computerSelection}`);
    showMessage(playerSelection, computerSelection);
}

game();

/* for (let i = 0; i < 5; i++) {
    game();
} */

// Show score

/* alert (`Players Score: ${playerScore} \nComputers Score: ${ComputerScore}`);
 */

// Change the Button by pressing it

function buttonAnimation (button) {
    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);
}
