//Home Page 

//Function to get number of games
const numGamesBtn = document.querySelectorAll('.btns')

//Buttons click events
numGamesBtn.forEach((button) => {
    button.addEventListener('click', () => {
        //get num games from id
        let numGames = button.id;

        //Set to local storage 
        localStorage.setItem("numGames", numGames);

        //Call active button function 
        activateButton({button: numGames});

        //Remove class error from play 
        const playGameButton = document.querySelector('#play')
        document.getElementById(playGameButton.id).classList.remove('error')
        document.getElementById(playGameButton.id).classList.add('active')
    });
});

// button = #id 

const activateButton = ({ button }) => {
    const button1 = '3'
    const button2 = '5'
    const button3 = '7'

    // reset buttons
    document.getElementById(button1).classList.remove('active')
    document.getElementById(button2).classList.remove('active')
    document.getElementById(button3).classList.remove('active')

    document.getElementById(button).classList.add('active')
}


///Function to take user to next page once play is clikced
const playGameButton = document.querySelector('#play')
playGameButton.addEventListener('click', () => {
    //Checks if numGames has been selected
    for (const btn of numGamesBtn) {
        if (btn.classList.contains('active')) {
            location.href = 'play.html';
        }
        else {
            playGameButton.classList.add('error')
        }
    }
})