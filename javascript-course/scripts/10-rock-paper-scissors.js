    
    let scores = JSON.parse(localStorage.getItem('scores')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };
        
    updateScoreElement();
    /*      
    if (!scores) {
        scores = {
            wins: 0,
            losses: 0,
            ties: 0
        }
    }
*/

    console.log(scores);

    function playGame(playerMove, wins, losses, ties) {
        const computerChoice = pickComputerMove();

        let result = '';
        
        if (playerMove === 'scissors') {
        
            if (computerChoice === 'rock') {
                result = 'You Lose';
            }
            else if (computerChoice === 'paper') {
                result = 'You Win';
            }
            else if (computerChoice === 'scissors') {
                result = 'Tie';
            }

        }

        else if (playerMove === 'paper') {

            if (computerChoice === 'rock') {
                result = 'You Win';
            }
            else if (computerChoice === 'paper') {
                result = 'Tie';
            }
            else if (computerChoice === 'scissors') {
                result = 'You Lose';
            }
        
        }

        else if (playerMove === 'rock') {

            if (computerChoice === 'rock') {
                result = 'Tie';
            }
            else if (computerChoice === 'paper') {
                result = 'You Lose';
            }
            else if (computerChoice === 'scissors') {
                result = 'You Win';
            }  
        }

        if (result === 'You Win') {
            scores.wins = scores.wins + 1;
        }
        else if (result === 'You Lose') {
            scores.losses = scores.losses + 1; 
        }
        else if (result === 'Tie') {
            scores.ties = scores.ties + 1;
        }

        localStorage.setItem('scores', JSON.stringify(scores));
        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerChoice}-emoji.png" class="move-icon">Computer`;

    }   
    
    function updateScoreElement () {
        document.querySelector('.js-score').innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
    }

    function pickComputerMove() {
        const randomNumber = Math.random();

        let computerChoice = ''; 
        
        if (randomNumber >= 0 && randomNumber < 1/3) {
            computerChoice = 'rock';
        } 
        else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerChoice = 'paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerChoice = 'scissors';
        }

    return computerChoice;
}