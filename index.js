function getComputerChoice() {
    let a = Math.floor(Math.random()*3);
    switch (a) {
        case 0:
            a = 'paper';
            break;
        case 1:
            a = 'scissors';
            break;
        case 2:
            a = 'rock';
            break;
    }
    return a;
}

function playGame(computerChoice, playerChoice) {
    if (computerChoice.toLowerCase() === playerChoice.toLowerCase()) {
      return `Draw! Both chose ${playerChoice}`;
    } else if (computerChoice.toLowerCase() === 'paper') {
        if (playerChoice.toLowerCase() === 'scissors') {
            return 'You Win! Scissors beats paper';
        } else {
            return 'You Lose! Paper beats rock';
        }
    } else if (computerChoice.toLowerCase() === 'scissors') {
        if (playerChoice.toLowerCase() === 'rock') {
            return 'You Win! Rock beats scissors';
        } else {
            return 'You Lose! Scissors beats paper';
        }
    } else if (computerChoice.toLowerCase() === 'rock') {
        if (playerChoice.toLowerCase() === 'paper') {
            return 'You Win! Paper beats rock';
        } else {
            return 'You Lose! Rock beats scissors';
        }
    }
}

let computerWins = 0;
let playerWins = 0;
let draws = 0

function game() {
    for (i = 0; i < 5; ++i) {
        let playerChoice = prompt('Rock, Paper, Scissors, Shoot...');
        let computerChoice = getComputerChoice();
        let result = playGame(computerChoice, playerChoice);
        console.log(result);
        if (result.charAt(4) === 'W') {
            playerWins++;
        } else if (result.charAt(4) === 'L') {
            computerWins++;
        } else {
            draws++;
        }
    }
    if (computerWins > playerWins) {
        return `Computer Wins with ${computerWins} Wins, ${playerWins} loses and ${draws} draws!`
    } else if (playerWins > computerWins) {
        return `You Win! With ${playerWins} Wins, ${computerWins} losss and ${draws} draws!`
    } else {
        return `Draw!`
    }

}

console.log(game());