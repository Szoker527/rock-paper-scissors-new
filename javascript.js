const startBtn = document.querySelector('#start');

startBtn.addEventListener("click", );


const rockBtn = document.querySelector('#rock');


const container = document.querySelector('#results');

const scoreGame = document.createElement("div");
scoreGame.classList.add("text");
scoreGame.innerText = `Game Round: 0 User Score: 0 Computer Score: 0`
container.appendChild(scoreGame);

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissBtn = document.querySelector('#scissors');

rockBtn.addEventListener("click", fullGame);
paperBtn.addEventListener("click", fullGame);
scissBtn.addEventListener("click", fullGame);

function pageChange(e) {
    console.log(e);
}

function computerPlay() {
    let randomNum = Math.floor(Math.random()*3) + 1
    if (randomNum == 1) {
        console.log("rock");
        return "rock"
    }
    else if (randomNum == 2) {
        console.log("paper");
        return "paper"
    }
    else {
        console.log("scissors");
        return "scissors"
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

function game(e) {
    const playerSelection = e.target.innerText;
    console.log(playerSelection);
    const computerSelection = computerPlay();
    const gameRound = playRound(playerSelection, computerSelection);

    if (gameRound === "You Won!") {
        ++keepScore;
        ++userScore;
        computerScore;
        scoreGame.innerText = `Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`;            
    }
    else if (gameRound === "You Lost!") {
        ++keepScore;
        userScore;
        ++computerScore;
        scoreGame.innerText = `Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`;    
    }
    else if (gameRound === "Draw!") {
        ++keepScore;
        userScore;
        computerScore;
        scoreGame.innerText = `Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`;    
    }
    else if (gameRound === "You did something you shouldn't!"){
        ++keepScore;
        userScore;
        computerScore;
        scoreGame.innerText = `Game Round: ${keepScore} User Score: ${(userScore < 0)? 0 : userScore} Computer Score: ${(computerScore < 0)? 0 : computerScore}`;    
    }
}


function fullGame(e) {
    keepScore = 0;
    userScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        game(e)
    }
        if (userScore > computerScore) {
            alert(`Congrats you won! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
        }
        else if (userScore < computerScore) {
            alert(`Wow you lost! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
        }
        else if (userScore == computerScore) {
            alert(`It's a draw! Final Score: ${(userScore < 0)? 0 : userScore} : ${(computerScore < 0)? 0 : computerScore}`);
        }
        else {
            alert(`Something wrong!`);
        }
}



