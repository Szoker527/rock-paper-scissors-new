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
            alert("Draw!");
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            alert("You Lost!");
        }
        else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            alert("You Won!");
        }
        else {
            alert("There is a Problem!")
        }
  }

function finalScore(keepScore, userScore, computerScore) {
    if (playRound() == "You Lost!") {
        ++keepScore;
        --userScore;
        ++computerScore;
        alert(`Game Round: ${keepScore}, User Score: ${userScore} Computer Score: ${computerScore}`)
    }
    else if (playRound() == "You Won!") {
        ++keepScore;
        ++userScore;
        --computerScore;
        alert(`Game Round: ${keepScore}, User Score: ${userScore} Computer Score: ${computerScore}`)
    }
    else {
        keepScore;
        userScore;
        computerScore;
        alert(`Game Round: ${keepScore}, User Score: ${userScore} Computer Score: ${computerScore}`)
    }

}
function game() {
    let keepScore = 0;
    let userScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {     
        const playerSelection = prompt("What do you choose?")
        if (playerSelection == null) {
            alert("You didn't choose anything you get 0 points!")
        }
        else {
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            if (playRound() == "You Won!"){
                alert("Great Job!");
            }
            else if(playRound() == "You Lost!"){
                alert("Bad Job!")
            }
            else if (playRound() == "Draw!") {
                alert("It's a Draw!")
            }
            else {
                alert("There is a Problem!")
            }

        }

    }


}


 