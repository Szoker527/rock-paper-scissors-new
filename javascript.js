
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



function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" 
        || playerSelection == "scissors" && computerSelection == "scissors") {
            return "Draw!";
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            return "You Lost!";
        }
        else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            return "You Won!";

        }
        else {
            return "There is a Problem!";
        }
        
  }


function game() {
    let keepScore = 0;
    let userScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {     
        const playerSelection = prompt("What do you choose?").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == "You Won!") {
            ++keepScore;
            ++userScore;
            --computerScore;
            alert(`Game Round: ${keepScore} 
            User Score: ${userScore} Computer Score: ${computerScore}`);
        }
        else if (playRound(playerSelection, computerSelection) == "Draw!") {
            keepScore;
            userScore;
            computerScore;
            alert(`Game Round: ${keepScore}  
            User Score: ${userScore} Computer Score: ${computerScore}`);
        }
        else if (playRound(playerSelection, computerSelection) == "You Lost!") {
            ++keepScore;
            --userScore;
            ++computerScore;
            alert(`Game Round: ${keepScore} 
            User Score: ${userScore} Computer Score: ${computerScore}`);
        }
    }
    if (userScore > computerScore) {
        alert(`Congrats you won! Final Score: ${userScore} : ${computerScore}`)
    }
    else if (userScore < computerScore) {
        alert(`Wow you lost! Final Score: ${userScore} : ${computerScore}`)
    }
    else if (userScore = computerScore) {
        alert(`It's a draw! Final Score: ${userScore} : ${computerScore}`)
    }
    else {
        alert("Something went wrong!")
    }
}
console.log(game());
