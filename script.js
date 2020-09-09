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

/* 
else if (playerSelection === "scissors" && computerSelection === "scissors"){
            return("Tie");
        } else if (playerSelection === "paper" && computerSelection === "paper"){
            return("Tie");
        } else (playerSelection === "rock" && computerSelection === "rock"); {
            return("Tie");
        }
*/


/*
THE PLAN:

Copy and paste what I can use from before

Add event listener to hook up the id's of the buttons to the player's choice
of rock, paper, and scissors

Ensure it knows what the player's and computer's choices are

Copy/paste or write code to see who should win (ie, paper beats rock and so on)

Get the computer to pick again once a button is pressed and the round is played

Create a function to keep track of the score and stop after someone hits 5 points

Add in a scoreboard that tells you what the computer picked and who won, how many 
points you both have

display a win/lose message after the game and add an option to reset
*/
