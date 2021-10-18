



const startBtn = document.getElementsByTagName("button")[0];
startBtn.addEventListener("click", showGame );

function showGame() {
    const hiddenGame = document.getElementById('hiddenGame')
    hiddenGame.classList.add("showGame");
    const hidestart = document.getElementById("contentStart");    
    hidestart.classList.add("hideall");
}

let usergameScore = 0;
let cpugameScore = 0;
let gamedraw = 0;


const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}


const userChoice = document.querySelectorAll(".userimg img");

userChoice.forEach(img => img.addEventListener("click", userWeapon));

userChoice.forEach(img => img.addEventListener("click", roundOne));

function roundOne(e) {
    playerSelection = e.target.id;
    computerSelection = computerPlay().toLowerCase();
    playRound(playerSelection, computerSelection);

    if (cpugameScore === 5 || usergameScore === 5 ) {
        gameEnd();
    }
}

function playersLabel(e) {
    const choice = e.target.id;
    const label = document.querySelector(".userWeap")
    label.innerText = choice.toUpperCase();
}

function cpuLabel(computerSelection) {
    const label = document.querySelector(".choiceWeap")
    label.innerText = computerSelection.toUpperCase();
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

function cpuWeapon(computerSelection) {
    const cpuImage = document.querySelector(".cpuRPS")
    if (computerSelection == "rock"){
        cpuImage["src"] = "images/rock2.jpg";
        }
    if (computerSelection == "paper"){
        cpuImage["src"] = "images/paper2.jpg";
        }
    if (computerSelection == "scissors"){
        cpuImage["src"] = "images/scissors2.jpg";
        }
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock" 
        || playerSelection == "paper" && computerSelection == "paper" 
        || playerSelection == "scissors" && computerSelection == "scissors") {
            ++gamedraw
            roundGamecount()
            document.getElementById("sroceDis").innerHTML = "Draw!";
            cpuLabel(computerSelection);
            cpuWeapon(computerSelection);
            return "Draw!";
        }
        else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock"){
            cpugameScore = ++cpugameScore;
            roundGamecount()
            cpuGamecount();
            document.getElementById("sroceDis").innerHTML = "You Lost!";
            cpuLabel(computerSelection);
            cpuWeapon(computerSelection);
            return "You Lost!";

        }
        else if (playerSelection == "rock" && computerSelection == "scissors" 
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper"){
            usergameScore = ++usergameScore;
            roundGamecount()
            playerGamecount();
            document.getElementById("sroceDis").innerHTML = "You Won!";
            cpuLabel(computerSelection);
            cpuWeapon(computerSelection);
            return "You Won!";

        }
        else {
            document.getElementById("sroceDis").innerHTML = "You did something you shouldn't!";
            cpuLabel(computerSelection);
            cpuWeapon(computerSelection);
            return "You did something you shouldn't!";
        }
        
  }


function cpuGamecount() {
    const cpucount = document.getElementById("pcScore");
    cpucount.innerHTML = cpugameScore;
    const cpucountEnd = document.getElementById("pcScoreEnd");
    cpucountEnd.innerHTML = cpugameScore;
}

function playerGamecount() {
    const playercount = document.getElementById("usScore");
    playercount.innerHTML = usergameScore;
    const playercountEnd = document.getElementById("usScoreEnd");
    playercountEnd.innerHTML = usergameScore;
}

function roundGamecount() {
    const roundScore = document.getElementById("uspcScore");
    roundScore.innerHTML = `${usergameScore + cpugameScore + gamedraw}`;
}

const endBtn = document.getElementsByTagName("button")[1];
endBtn.addEventListener("click", showAgain);

function showAgain() {
    location.reload()
}



function gameEnd() {
    const hidemain = document.querySelector("main");
    hidemain.classList.add("hideall");
    const showend = document.getElementById("end");
    showend.classList.remove("hideall");
    const endTitle = document.getElementById("endHead");


    if (usergameScore > cpugameScore) {
        endTitle.innerHTML = "Machine finally lost!"
    }
    else if (usergameScore < cpugameScore) {
        endTitle.innerHTML = "Humans are still too weak against Machine!"
    }

}