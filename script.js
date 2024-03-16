function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const select = choice[Math.floor(Math.random() * choice.length)];
    return select;
}
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "ROCK") && (computerSelection === "ROCK")) {
        message = "You tied!";
    }

    else if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {
        message = "You lose! Paper beats rock.";
    }

    else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
        message = "You win! Rock beats paper.";
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
        message = "You win! Paper beats rock.";
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "PAPER")) {
        message = "You tied!";
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {
        message = "You lose! Scissors beat paper.";
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {
        message = "You lose! Rock beats scissors.";
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
        message = "You win! Scissors beats paper.";
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "SCISSORS")) {
        message = "You tied!";
    }

    return message;
}

let playerSelection = "paper";
playerSelection = playerSelection.toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
