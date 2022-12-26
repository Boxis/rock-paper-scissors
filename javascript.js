function getComputerChoice() {
    var arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}


function playRound(playerSelection, computerSelection1) {
    let computerSelection = computerSelection1.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        result = "It's a draw!";
    } else if ((playerSelection =="rock" && computerSelection=="scissors") 
        || (playerSelection=="paper" && computerSelection=="rock")
        || (playerSelection=="scissors" && computerSelection=="paper")) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}


function game() {
    let scoreHuman = 0;
    let scoreCPU = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your selection: ").toLowerCase();
        // const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")==true) {
            scoreHuman++;
        } else if (result.includes("Lose")==true) {
            scoreCPU++;
        }
    }

    console.log(scoreHuman);
    console.log(scoreCPU);

    if (scoreHuman==scoreCPU) {
        message = "It's a tie!";
    } else if (scoreHuman > scoreCPU) {
        message = "You win!";
    } else {
        message = "Computer wins!";
    }

    return message;
}


