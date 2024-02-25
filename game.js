var playerChoice = document.getElementById("player-choice");
var computerImage = document.getElementById("random-image");
var playerScore = 0;
var computerScore = 0;

// Function to make buttons dynamic
document.addEventListener('click', (event) => {
    if (event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissors") {
        setPlayerChoiceImage(`./assets/${event.target.id}-hand.png`);
        displayRandomImage();
        compareScore();
    }
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

    if (playerScore === 5 || computerScore === 5) {
        resetGame();
        return; // Stop comparing scores if the game has ended
    }

    if (playerImageSrc === computerImageSrc) {
        console.log("It's a Draw");
    } else if (
        (playerImageSrc.includes('rock') && computerImageSrc.includes('scissors')) ||
        (playerImageSrc.includes('paper') && computerImageSrc.includes('rock')) ||
        (playerImageSrc.includes('scissors') && computerImageSrc.includes('paper'))
    ) {
        playerScore++;
        popup(win);
    } else {
        computerScore++;
        popup(lose);
    }

    updateScore(); // Move the updateScore() call here to ensure scores are updated after each comparison
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
    if (playerScore === 5 || computerScore === 5) {
        result.style.display = "block";
        showPlayAgainButton(); // Show play again button when the game ends
        hideHandGestures(); // Hide hand gestures when the game ends
    }
}

// Function to show play again button
function showPlayAgainButton() {
    var playAgainButton = document.getElementById("play-again-btn");
    document.getElementById("result-footer").style.display = "flex";

}

// Function to hide hand gestures
function hideHandGestures() {
    playerChoice.innerHTML = '';
    computerImage.innerHTML = '';
}

// Function Reset Game
function resetGame() {
    // No need for a separate resetGame function as the reload handles it
}

// Function to Play Again
var playAgain = document.getElementById("play-again-btn");
playAgain.addEventListener('click', () => {
    window.location.reload();
});
