function getComputerChoice() {
    var arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

// console.log(getComputerChoice());

function playRound() {
    let playerSelection = prompt("Please enter your selection: ").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
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

    console.log(result);
    return result;
}