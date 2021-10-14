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

const userChoice = Array.from(document.querySelectorAll(".userimg img"));

userChoice.forEach(img => img.addEventListener("click", pageChange))


function pageChange(e) {
    const parent = document.getElementById('userPlay');
    const img = document.getElementById(`${e.target.id}`)
    let img_fight = img.cloneNode(true)
    parent.appendChild(img_fight);
}




startBtn.addEventListener("click", showGame );