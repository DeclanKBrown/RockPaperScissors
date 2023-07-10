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

//Declare initial vairables
let computerWins = 0;
let playerWins = 0;
let draws = 0

//Function for getting who won after a number of games
function game(choice, num) {
    //Sets player choice to variable and gets cmputer choice
    let playerChoice = choice;
    let numGames = parseInt(num);
    let computerChoice = getComputerChoice();

    //Shows this in the choises span
    let choices = document.getElementById('choices')
    choices.textContent = `${playerChoice} vs ${computerChoice}`;

    //Gets result of game
    let result = playGame(computerChoice, playerChoice);

    //Edits span to show result on Screen
    let winner = document.getElementById('winner');
    function showResult() {
        winner.textContent = result
    }
    setTimeout(showResult, 500);

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
    let compScore = document.getElementById('computer')
    let drawScore = document.getElementById('draw')

    function showScore() {
        yourScore.textContent = `You: ${playerWins}`;
        compScore.textContent = `Computer: ${computerWins}`;
        drawScore.textContent = `Draws ${draws}`;
    }
    setTimeout(showScore, 500);

    //Displays results of funal score
    function finalScore() {
        //create overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const popup = document.createElement('div');
        popup.classList.add('popup');

        const popupHeading = document.createElement('div');
        popupHeading.classList.add('popupHeading');

        const popupH2 = document.createElement('h2');
        popupH2.classList.add('popupH2');

        const popupH3 = document.createElement('h3');
        popupH3.classList.add('popupH3')

        const popupButtons = document.createElement('div');
        popupButtons.classList.add('popupButtons');

        const playAgainBtn = document.createElement('button');
        playAgainBtn.classList.add('playAgainBtn');
        playAgainBtn.innerHTML = 'play again';
        playAgainBtn.addEventListener('click', () => {
            location.href = 'play.html';
        })

        const homeBtn = document.createElement('button');
        homeBtn.classList.add('homeBtn');
        homeBtn.textContent = 'home';
        homeBtn.addEventListener('click', () => {
            location.href = 'index.html';
        })

        document.body.appendChild(overlay);
        overlay.appendChild(popup);
        popup.appendChild(popupHeading);
        popupHeading.appendChild(popupH2);
        popupHeading.appendChild(popupH3)
        popup.appendChild(popupButtons);
        popupButtons.appendChild(playAgainBtn);
        popupButtons.appendChild(homeBtn);

        //Gets correct grasmmer
        //Initilize variables
        let winsGram = "";
        let lossesGram = "";
        let drawsGram = "";

        function grammer(val1, val2, val3) {
            if (val1 === 1) {
                winsGram = 'win';
            } else {
                winsGram = 'wins'
            }
            if (val2 === 1) {
                lossesGram = 'loss'
            } else {
                lossesGram = 'losses'
            }
            if (val3 === 1) {
                drawsGram = 'draw'
            } else {
                drawsGram = 'draws'
            }
            

        }
        //Computes who won and displays it on the overlay
        if (computerWins > playerWins) {
            popupH2.textContent = `Computer Wins`
            grammer(computerWins, playerWins, draws);
            popupH3.textContent =  `${computerWins} ${winsGram}, ${playerWins} ${lossesGram} and ${draws} ${drawsGram}!`;
        } else if (playerWins > computerWins) {
            popupH2.textContent = `You Win!`
            grammer(playerWins, computerWins, draws)
            popupH3.textContent =  `${playerWins} ${winsGram}, ${computerWins} ${lossesGram} and ${draws} ${drawsGram}!`;
        } else {
            popupH2.textContent = `Draw!`;
            grammer(playerWins, computerWins, draws)
            popupH3.textContent =  `${playerWins} ${winsGram}, ${computerWins} ${lossesGram} and ${draws} ${drawsGram}!`;
        }
    }
    
    //Calls finalScore function when num games is reached
    if (computerWins + playerWins + draws === numGames) {
        setTimeout(finalScore, 500);
    }
}


//player choice funtion
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerChoice = button.id;

    //Set button style to active
    activateButton({button: playerChoice});

    //get from local storage
    let numGames = localStorage.getItem('numGames')

    //Activate game
    game(playerChoice, numGames)
  });
});

//highlight button clikced 
const activateButton = ({ button }) => {
    const button1 = 'rock'
    const button2 = 'paper'
    const button3 = 'scissors'

    //disables button until result displayed
    const btn1 = document.getElementById(button1)
    const btn2 = document.getElementById(button2)
    const btn3 = document.getElementById(button3)
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    setTimeout(function() {btn1.disabled = false; btn2.disabled = false; btn3.disabled = false;}, 500);

    // reset buttons
    document.getElementById(button1).classList.remove('active')
    document.getElementById(button2).classList.remove('active')
    document.getElementById(button3).classList.remove('active')

    document.getElementById(button).classList.add('active')
    setTimeout(function() {document.getElementById(button).classList.remove('active')}, 500)
}



//Add Home screen to users can selct 3, 5 or seven games
//Stop at users slection
//Add images to choices
//makes image that wins move into the losing image
//set timeput fr win/loss/draw messagw
//make popup for game end - display stats and play again option, home option