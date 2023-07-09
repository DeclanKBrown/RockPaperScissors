//Get computers choice
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

//Plays the game returns who won
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

//player choice funtion
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerChoice = button.id;
    game(playerChoice)
  });
});

//Function for getting who won after a number of games

//Declare initial vairables
let computerWins = 0;
let playerWins = 0;
let draws = 0

function game(choice) {
    //Sets player choice to variable and gets cmputer choice
    let playerChoice = choice;
    let computerChoice = getComputerChoice();

    //Shows this in the choises span
    let choices = document.getElementById('choices')
    choices.textContent = `${playerChoice} vs ${computerChoice}`;

    //Gets result of game
    let result = playGame(computerChoice, playerChoice);

    //Edits span to show result on Screen
    let winner = document.getElementById('winner');
    winner.textContent = result;

    //Increments results
    if (result.charAt(4) === 'W') {
        playerWins++;
    } else if (result.charAt(4) === 'L') {
        computerWins++;
    } else {
        draws++;
    }
    //Shows current score on DOM
    let yourScore = document.getElementById('you')
    yourScore.textContent = `You: ${playerWins}`;

    let compScore = document.getElementById('computer')
    compScore.textContent = `Computer: ${computerWins}`;

    let drawScore = document.getElementById('draws')
    drawScore.textContent = `Draws ${draws}`;

    //Computes winner after 5 games
    let finalWinner = document.getElementById('finalScore')
    if (computerWins + playerWins + draws === 5) {
        if (computerWins > playerWins) {
            finalWinner.textContent = `Computer Wins with ${computerWins} Wins, ${playerWins} loses and ${draws} draws!`;
        } else if (playerWins > computerWins) {
            finalWinner.textContent = `You Win! With ${playerWins} Wins, ${computerWins} losss and ${draws} draws!`;
        } else {
            finalWinner.textContent = `Draw!`;
        }
        
    }
}



//Add Home screen to users can selct 3, 5 or seven games
//Stop at users slection
//Add images to choices
//makes image that wins move into the losing image
//set timeput fr win/loss/draw messagw
//make popup for game end - display stats and play again option, home option