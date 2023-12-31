const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
let score = 0;

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function(event) {
    jump();
});

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    score += 0.1;
    scoreDisplay.textContent = "Score: " + Math.round(score);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over! Your score is: " + Math.round(score));
        score = 0;
        scoreDisplay.textContent = "Score: " + score;
    }

}, 10);
