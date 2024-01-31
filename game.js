var playerChoice = document.getElementById("player-choice");
var computerImage = document.getElementById("random-image");
var playerScore = 0;
var computerScore = 0;

// Function to make buttons dynamic
document.addEventListener('click', (event) => {
    if (event.target.id == "rock") {
        setPlayerChoiceImage('./assets/rock-hand.png');
    } else if (event.target.id == "paper") {
        setPlayerChoiceImage('./assets/paper-hand.png');
    } else if (event.target.id == "scissor") {
        setPlayerChoiceImage('./assets/scissors-hand.png');
    }
    displayRandomImage();
    compareScore();
});

function getRandomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}

const ImageArray = ['./assets/rock-hand.png', './assets/paper-hand.png', './assets/scissors-hand.png'];

// Function for computer image
function displayRandomImage() {
    let randomImageSrc = getRandomNum(2);
    computerImage.innerHTML = `<img src="${ImageArray[randomImageSrc]}" alt="Random Image">`;
}

// Function for player image
function setPlayerChoiceImage(imageSrc) {
    let playerImage = document.createElement('img');
    playerImage.src = imageSrc;
    playerChoice.innerHTML = '';
    playerChoice.appendChild(playerImage);
}

// Function to Compare score
function compareScore() {
    let computerImageSrc = computerImage.firstElementChild.src;
    let playerImageSrc = playerChoice.firstElementChild.src;

    if (playerScore == 5 || computerScore == 5) {
        resetGame();
    } else if (playerImageSrc === computerImageSrc) {
        console.log("It's a Draw");
    } else if (
        (playerImageSrc.includes('rock') && computerImageSrc.includes('scissors')) ||
        (playerImageSrc.includes('paper') && computerImageSrc.includes('rock')) ||
        (playerImageSrc.includes('scissors') && computerImageSrc.includes('paper'))
    ) {
        playerScore++;
        updateScore();
        popup(win);
    } else {
        computerScore++;
        updateScore();
        popup(lose);
    }
}

// Function to update score
function updateScore() {
    let playerScoreDisplay = document.getElementById("player-score");
    let computerScoreDisplay = document.getElementById("computer-score");
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

// Function to display popup
var win = document.getElementById("result-win");
var lose = document.getElementById("result-lose");

function popup(result) {
    if (playerScore == 5 || computerScore == 5) {
        result.style.display = "block";
    }
}

// Function Reset Game
function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        window.location.reload();
    }
}

// Function to Play Again
var playAgain = document.getElementById("play-again-btn");
playAgain.addEventListener('click', () => {
    window.location.reload();
});
