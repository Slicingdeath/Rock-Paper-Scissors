// console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}

function getHumanChoice () {
    let humanChoice = (prompt("Rock, Paper, or Scissors?: "))
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    let roundWinner = ""
    if (humanChoice == computerChoice) {
        roundWinner = "You tied! You both played " + humanChoice;
    } else if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        roundWinner = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    } else {
        humanScore++;
        roundWinner = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    const info = document.querySelector("#result");
    info.textContent = "";

    const round_info = document.createElement("p");
    round_info.textContent = roundWinner;
    info.appendChild(round_info);

    const running_score = document.createElement("p");
    running_score.textContent = "Player Score: " + humanScore + "; Computer Score: " + computerScore;
    info.appendChild(running_score);

    let game_winner = "";
    if (humanScore == 5) {
        game_winner = "Congrats! You win!"
    } else if (computerScore == 5) {
        game_winner = "The computer won."
    }
    const game_win = document.createElement("p");
    game_win.textContent = game_winner;
    info.appendChild(game_win);
}

function playGame () {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function() {
        playRound ("rock", getComputerChoice())
    });

    paper.addEventListener("click", function() {
        playRound ("paper", getComputerChoice())
    });

    scissors.addEventListener("click", function() {
        playRound ("scissors", getComputerChoice())
    });


    

}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
// playRound(getHumanChoice(), getComputerChoice());
playGame();