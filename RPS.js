/*Computer slection */
function computerPlay() {
    x = Math.floor(Math.random() * 3)
    if (x == 0){
        return("Rock")
    } else if (x == 1){
        return("Paper")
    } else {
        return("Scissors")
    }
}
/* tracking of current score*/    
let playerScore = 0;
let enemyScore = 0;
function winner() {
    if (playerScore == 5){
        document.getElementById("result").innerHTML ='You Win!'
    } else if (enemyScore == 5) {
        document.getElementById("result").innerHTML ='You Lose!'
    } else {
        document.getElementById("result").innerHTML =""
    }
}
function displayPlayer(playerSelection) {
    if (playerSelection == "Rock"){
        document.getElementById("player-move").innerHTML = '<i class="fa fa-hand-rock-o choice" aria-hidden="true"></i>';
    } else if (playerSelection =="Paper"){
        document.getElementById("player-move").innerHTML = '<i class="fa fa-hand-paper-o choice" aria-hidden="true"></i>';
    } else if (playerSelection == "Scissors"){
        document.getElementById("player-move").innerHTML = '<i class="fa fa-hand-scissors-o choice scissors" aria-hidden="true"></i>';
    }
}
function displayEnemy(computerSelection){
    if (computerSelection == "Rock"){
        document.getElementById("enemy-move").innerHTML = '<i class="fa fa-hand-rock-o choice" aria-hidden="true"></i>';
    } else if (computerSelection =="Paper"){
        document.getElementById("enemy-move").innerHTML = '<i class="fa fa-hand-paper-o choice" aria-hidden="true"></i>';
    } else if (computerSelection == "Scissors"){
        document.getElementById("enemy-move").innerHTML = '<i class="fa fa-hand-scissors-o choice scissors" aria-hidden="true"></i>';
    }

}


function playRound(playerSelection,computerSelection) {
    displayPlayer(playerSelection)
    displayEnemy(computerSelection)
    if (playerSelection == "Rock"){
        if(computerSelection == "Rock"){
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("Draw! Rock vs Rock")
        } else if (computerSelection == "Paper"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You lose! Rock vs Paper, Paper beats Rock")
            
        } else {
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You win! Rock vs Scissors, Rock beats Scissors")
            
        }
    } else if (playerSelection == "Paper"){
        if(computerSelection == "Paper"){
            winner()
            return("Draw! Paper vs Paper")
        }else if(computerSelection == "Scissors"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You lose! Paper vs Scissors, Scissors beats Paper")
        }else{
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You win! Paper vs Rock, Paper beats Rock")
            
        }
    } else if (playerSelection == "Scissors") {
        if(computerSelection == "Scissors"){
            return("Draw! Scissors vs Scissors")
        } else if (computerSelection == "Rock"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You lose! Scissors vs Rock, Rock beats Scissors")
            
        } else if(computerSelection == "Paper") {
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
            document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
            winner()
            return("You win! Scissors vs Paper, Scissors beats Paper")
            
        }
    } else {
        document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
        document.getElementById("enemy-score").innerHTML = "Enemy Score: " + enemyScore;
        winner()
    }

}

function game(val){
    let i;
    for (i = 0; i < 5 ; i++){
        let playerSelection = val
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function clicks(val){
    if(playerScore < 5 && enemyScore < 5){
        let playerSelection = val
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

}
function restart(){
    playerScore = 0;
    enemyScore = 0;
    playRound(0,0)

}


