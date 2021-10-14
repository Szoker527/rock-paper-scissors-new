const startBtn = document.getElementsByTagName("button")[0];

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


startBtn.addEventListener("click", showGame );