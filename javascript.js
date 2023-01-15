function getComputerChoice() {
    var arr = ["Rock", "Paper", "Scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}


const buttons = document.querySelectorAll('button');

var scoreHuman = 0;
var scoreCPU = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.id);
        const container = document.querySelector('#output-messages');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = result;
    
        container.appendChild(content);

        if (result.includes("Win")==true) {
            scoreHuman++;
        } else if (result.includes("Lose")==true) {
            scoreCPU++;
        }

        finalOutput = checkScore(scoreHuman, scoreCPU);
        console.log(scoreHuman, scoreCPU);

        document.getElementById('human-score').innerHTML = "Human: " + scoreHuman;
        document.getElementById('cpu-score').innerHTML = "CPU: " + scoreCPU;

        if (scoreHuman==5|| scoreCPU==5) {
            scoreHuman=0;
            scoreCPU=0;
            removeAllChildNodes(container);
            content.textContent = finalOutput;
            container.appendChild(content);
        }
    })
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        result = `It's a draw! Both chose ${playerSelection}`;
    } else if ((playerSelection =="Rock" && computerSelection=="Scissors") 
        || (playerSelection=="Paper" && computerSelection=="Rock")
        || (playerSelection=="Scissors" && computerSelection=="Paper")) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function checkScore(scoreHuman, scoreCPU) {
    if (scoreHuman == 5) {
        message = 'You win!';
    } else if (scoreCPU == 5) {
        message = 'CPU wins!';
    } else {
        message = 'The game continues!';
    }
    return message;
}


