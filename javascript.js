



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
const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}


const userChoice = document.querySelectorAll(".userimg img");

userChoice.forEach(img => img.addEventListener("click", userWeapon));

userChoice.forEach(img => img.addEventListener("click", roundOne));

function roundOne() {
    const imgcont = document.getElementById("bottomChoice");
    const img = imgcont.querySelector("img");
    playerSelection = img.alt.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection)
}

function playersLabel(e) {
    const choice = e.target.id;
    const label = document.querySelector(".userWeap")
    label.innerText = choice.toUpperCase();
}

function userWeapon (e) {
    const imagesFight = document.querySelector(".choiceRPS")
    if (e.target.id == "rock"){
        playersLabel(e)
        imagesFight["src"] = "images/rock2.jpg";
        }
    if (e.target.id == "paper"){
        playersLabel(e)
        imagesFight["src"] = "images/paper2.jpg";
        }
    if (e.target.id == "scissors"){
        playersLabel(e)
        imagesFight["src"] = "images/scissors2.jpg";
        }
}

function cpuWeapon() {
    
}

function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay().toLowerCase();
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" 
        || playerSelection == "scissors" && computerSelection == "scissors") {
            document.getElementById("sroceDis").innerHTML = "Draw!";
            return "Draw!";
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            document.getElementById("sroceDis").innerHTML = "You Lost!";
            return "You Lost!";

        }
        else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            document.getElementById("sroceDis").innerHTML = "You Won!";
            return "You Won!";

        }
        else {
            document.getElementById("sroceDis").innerHTML = "You did something you shouldn't!";
            return "You did something you shouldn't!";
        }
        
  }

function game(e) {
    const playerSelection = userPick(e);
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


