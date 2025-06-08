// console.log("Hello World");

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

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
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
        console.log(roundWinner);
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("Congrats, you won!");
    } else if (humanScore < computerScore) {
        console.log("Darn, you lost.");
    } else {
        console.log("What?! It's a tie!")
    }
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
// playRound(getHumanChoice(), getComputerChoice());
playGame();