function computerPlay() {
    x = Math.floor(Math.random() * 3)
    if (x == 0){
        return("Rock")
        document.getElementById("enemyPaper").click();
    } else if (x == 1){
        return("Paper")
    } else {
        return("Scissors")
    }
}

let playerScore = 0;
let enemyScore = 0;

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "Rock"){
        if(computerSelection == "Rock"){
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("Draw! Rock vs Rock")
        } else if (computerSelection == "Paper"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You lose! Rock vs Paper, Paper beats Rock")
        } else {
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You win! Rock vs Scissors, Rock beats Scissors")
            
        }
    } else if (playerSelection == "Paper"){
        if(computerSelection == "Paper"){
            return("Draw! Paper vs Paper")
        }else if(computerSelection == "Scissors"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You lose! Paper vs Scissors, Scissors beats Paper")
        }else{
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You win! Paper vs Rock, Paper beats Rock")
            
        }
    } else if (playerSelection == "Scissors") {
        if(computerSelection == "Scissors"){
            return("Draw! Scissors vs Scissors")
        } else if (computerSelection == "Rock"){
            enemyScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You lose! Scissors vs Rock, Rock beats Scissors")
            
        } else {
            playerScore++
            console.log(enemyScore)
            console.log(playerScore)
            document.getElementById("playerScore1").innerHTML = playerScore;
            document.getElementById("enemyScore1").innerHTML = enemyScore;
            return("You win! Scissors vs Paper, Scissors beats Paper")
            
        }
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
    let playerSelection = val
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}


