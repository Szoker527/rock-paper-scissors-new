
function computerPlay() {
    let randomNum = Math.floor(Math.random()*3) + 1
    if (randomNum == 1) {
        return "rock"
    }
    else if (randomNum == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
} 

function userPlay() {
    userChoice = prompt("What do you choose?");
    if (userChoice == null) {
        return alert("Follow the rules!")
    }
    else {
        return userChoice.toLowerCase();
    }
}


function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" 
        || playerSelection == "scissors" && computerSelection == "scissors") {
            alert("Draw!");
            return "Draw!";
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            alert("You Lost!");
            return "You Lost!";

        }
        else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            alert("You Won!");
            return "You Won!";

        }
        else {
            alert("You did something you shouldn't!");
            return "You did something you shouldn't!";
        }
        
  }


function game() {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const gameRound = playRound(playerSelection, computerSelection);
    if (gameRound === "You Won!") {
        ++keepScore;
        ++userScore;
        computerScore;
        alert(`Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`);             
    }
    else if (gameRound === "You Lost!") {
        ++keepScore;
        userScore;
        ++computerScore;
        alert(`Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`);
    }
    else if (gameRound === "Draw!") {
        ++keepScore;
        userScore;
        computerScore;
        alert(`Game Round: ${keepScore}  User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`);
    }
    else if (gameRound === "You did something you shouldn't!"){
        ++keepScore;
        userScore;
        computerScore;
        alert(`Game Round: ${keepScore}  User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`);
    }
}

function playAgain(){
    let gameAgain = prompt("Whant to play again", "");
    if (gameAgain == "yes") {
         return fullGame();
    }
    else if(gameAgain == "no" || null){
        alert("GAME OVER!")
    }
}

function fullGame() {
    keepScore = 0;
    userScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        game()
    }
    if (userScore > computerScore) {
        alert(`Congrats you won! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
        return playAgain()
    }
    else if (userScore < computerScore) {
        alert(`Wow you lost! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
        return playAgain()
    }
    else if (userScore = computerScore) {
       alert(`It's a draw! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
       return playAgain()
    }
    else {
        alert(`Something wrong!`);
    }
}

console.log(fullGame())





