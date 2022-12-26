function getComputerChoice() {
    var arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

// console.log(getComputerChoice());

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

    // console.log(result);
    return result;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 2; i++) {
        let playerSelection = prompt("Please enter your selection: ").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

}

console.log(game());