let computerSelection;
let playerSelection;
let playerScore = 0
let computerScore = 0

const pick = document.querySelector('#pick');
pick.textContent = "" 

const scoreboard = document.querySelector('#scoreboard');
scoreboard.textContent = "Your score: " + playerScore + " Computer score: " + computerScore;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    function computerPlay() {
        return (Math.floor(Math.random() * 3));
    }
    
    let randomChoice = computerPlay();
    
    function computerChoice() {
        computerPlay();
        if (randomChoice == 0) {
            return "rock";
        } else if (randomChoice == 1) {
            return "paper";
        } else (randomChoice == 2); {
            return "scissors";
        }   
    }

    computerSelection = computerChoice();
    playerSelection = button.id
    pick.textContent = "The computer picked: " + computerSelection + ", you picked: " + playerSelection
    console.log("You picked: " + playerSelection);
    const roundResults = document.createElement('div')
    playRound();
    roundResults.textContent = playRound();
    addToScore();
    scoreboard.textContent = "Your score: " + playerScore + " Computer score: " + computerScore;
    scoreboard.appendChild(roundResults);
    areYaWinningSon();
  });
});

function playRound(){
        if (playerSelection === "rock" && computerSelection === "paper") {
            return("The Computer wins, " + computerSelection + " beats " + playerSelection + "!");
        } else if (playerSelection === "paper" && computerSelection === "scissors") {  
            return("The Computer wins, " + computerSelection + " beats " + playerSelection + "!"); 
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return("The Computer wins, " + computerSelection + " beats " + playerSelection + "!");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return("The Player wins, " + playerSelection + " beats " + computerSelection + "!");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return("The Player wins, " + playerSelection + " beats " + computerSelection + "!");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return("The Player wins, " + playerSelection + " beats " + computerSelection + "!");
        } else if (playerSelection === computerSelection) {
            return("It's a tie!"); 
        } else {
            return;
        }}

function addToScore(){
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {  
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
        } else {
            return;
        }}

const winOrLoseMessage = document.createElement('div');
winOrLoseMessage.classList.add('winlose');

function areYaWinningSon() {
    if (playerScore >= 5) {
        winOrLoseMessage.textContent = "You win! Congratulations!"
        scoreboard.appendChild(winOrLoseMessage);
    } else if (computerScore >= 5) {
        winOrLoseMessage.textContent = "You lose! Better luck next time."
        scoreboard.appendChild(winOrLoseMessage);
    } else {
        return;
    }
}