// window.onload = 



const startBtn = document.getElementsByTagName("button")[0];
startBtn.addEventListener("click", showGame );

function showGame() {
    const hiddenGame = document.getElementById('hiddenGame')
    if (hiddenGame.style.display === "none") {
        hiddenGame.classList.add("showGame");
        document.getElementById('startBtn').style.display='none';
    }
    else {
        hiddenGame.style.display = "none";
    }
}



const userChoice = Array.from(document.querySelectorAll(".userimg img"));
userChoice.forEach(img => img.addEventListener("click", userWeapon))

const roundResult = querySelector("scoreShow");
function userPick(e) {
    const choice = e.target.id;
    const label = document.querySelector(".userWeap")
    label.innerText = choice.toUpperCase();
}

function userWeapon (e) {
    const imagesFight = document.querySelector(".choiceRPS")
    if (e.target.id == "rock"){
        userPick(e)
        imagesFight["src"] = "images/rock2.jpg";
        }
    if (e.target.id == "paper"){
        userPick(e)
        imagesFight["src"] = "images/paper2.jpg";
        }
    if (e.target.id == "scissors"){
        userPick(e)
        imagesFight["src"] = "images/scissors2.jpg";
        }
}
const playerSelection = userPick(e);
console.log(playerSelection);

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" 
        || playerSelection == "scissors" && computerSelection == "scissors") {
            roundResult.innerText = "Draw!";
            return "Draw!";
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.innerText = "You Lost!";
            return "You Lost!";

        }
        else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            roundResult.innerText = "You Won!";
            return "You Won!";

        }
        else {
            roundResult.innerText = "You did something you shouldn't!";
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



