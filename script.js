let playerScore = 0;
let computerScore = 0;

console.log(playGame());

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
        computerScore++;
    }

    else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
        message = "You win! Rock beats paper.";
        playerScore++;
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
        message = "You win! Paper beats rock.";
        playerScore++;
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "PAPER")) {
        message = "You tied!";
    }

    else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {
        message = "You lose! Scissors beat paper.";
        computerScore++;
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {
        message = "You lose! Rock beats scissors.";
        computerScore++;
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
        message = "You win! Scissors beats paper.";
        playerScore++;
    }

    else if ((playerSelection === "SCISSORS") && (computerSelection === "SCISSORS")) {
        message = "You tied!";
    }
   

    return message;
    return playerScore;
    return computerScore;
}




function playGame() {
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Pick one (Rock, paper, or scissors)")
        playerSelection = playerSelection.toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    
    console.log(`You chose ${playerSelection}.`)
    console.log(`The Computer chose ${computerSelection}.`)
    console.log(message);
    console.log("The score is currently " +playerScore+ " to " +computerScore+ ".");
    }
}