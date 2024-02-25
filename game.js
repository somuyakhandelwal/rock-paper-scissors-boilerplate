var playerChoice = document.getElementById("player-choice");
var computerImage = document.getElementById("random-image");
var playerScore = 0;
var computerScore = 0;


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


function displayRandomImage() {
    let randomImageSrc = getRandomNum(2);
    computerImage.innerHTML = `<img src="${ImageArray[randomImageSrc]}" alt="Random Image">`;
}


function setPlayerChoiceImage(imageSrc) {
    let playerImage = document.createElement('img');
    playerImage.src = imageSrc;
    playerChoice.innerHTML = '';
    playerChoice.appendChild(playerImage);
}


function compareScore() {
    let computerImageSrc = computerImage.firstElementChild.src;
    let playerImageSrc = playerChoice.firstElementChild.src;

    if (playerScore === 5 || computerScore === 5) {
        resetGame();
        return;
    }

    if (playerImageSrc === computerImageSrc) {
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


function updateScore() {
    let playerScoreDisplay = document.getElementById("player-score");
    let computerScoreDisplay = document.getElementById("computer-score");
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}


var win = document.getElementById("result-win");
var lose = document.getElementById("result-lose");

function popup(result) {
    if (playerScore === 5 || computerScore === 5) {
        result.style.display = "block";
        showPlayAgainButton(); 
        hideHandGestures(); 
    }
}


function showPlayAgainButton() {
    var playAgainButton = document.getElementById("play-again-btn");
    document.getElementById("result-footer").style.display = "flex";
}


function hideHandGestures() {
    playerChoice.innerHTML = '';
    computerImage.innerHTML = '';
}


var playAgain = document.getElementById("play-again-btn");
playAgain.addEventListener('click', () => {
    window.location.reload();
});
