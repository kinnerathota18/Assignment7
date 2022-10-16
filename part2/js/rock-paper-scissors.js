/*eslint-env browser*/

//----------- The Rock, Paper, Scissors Game -----------------

//GLOBAL VARIABLES
var userChoice;
var compChoice;
var scoreUser;
var scoreComp;

function displayType() {
    "use strict";
    window.alert("Welcome to the Rock, Paper or Scissor Game");
}


function playGame() {
    "use strict";
    var r;
        
    //PROMPT THE USER HIS CHOICE
    do {
    userChoice = window.prompt("What do you choose: Rock, Paper or Scissor? \n(Input a word in the field)").toUpperCase();
   
      if (userChoice !== "ROCK" && userChoice !== "SCISSOR" && userChoice !== "PAPER") {
            window.alert("Your input choice was incorrect. You should input one of the following: Rock, Paper or Scissor"); 
        } 
    } while (userChoice !== "ROCK" && userChoice !== "SCISSOR" && userChoice !== "PAPER");
    
    //COMPUTER RANDOM CHOICE
    r = Math.random();
    if (r < 0.33) {
        compChoice = "ROCK";
    } else if (r > 0.66) {
        compChoice = "SCISSOR";
    } else {
        compChoice = "PAPER";
    }
    
    //COMPARE CHOISES
    if (userChoice === compChoice) {
        window.alert("It's a Tie and nobody wins!")
    } else if (userChoice === "ROCK" && compChoice === "SCISSOR" || userChoice === "SCISSORS" && compChoice === "PAPER" || userChoice === "PAPER" && compChoice === "ROCK") {
        scoreUser++;
        window.alert("You choose " + userChoice + "\nComputer choose " + compChoice + "\nYOU WIN!");
    } else {
        scoreComp++;
        window.alert("You choose " + userChoice + "\nComputer choose " + compChoice + "\nYOU LOSE!");
        
    }
}


function main() {
    "use strict"
    displayType();
    scoreComp = 0;
    scoreUser = 0;
    var playAgain = "y";  
    while (playAgain === "y") {
        playGame();
        window.alert("SCORE \nYou: " + scoreUser + "\nComputer: " + scoreComp);
        playAgain = window.prompt("Do you wish to play again? (y/n)", "y");
    }
    window.alert("Thank you for playing the game!");
    if (scoreUser > scoreComp) {
        window.alert("You are the winner! \nCONGRATULATIONS!");
    } else if (scoreUser < scoreComp) {
        window.alert("You are the looser!");
    } else {
        window.alert("Nobody wins!");
    }
}

main();
