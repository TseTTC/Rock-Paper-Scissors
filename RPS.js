function computerPlay() {
    x = Math.floor(Math.random() * 3)
    console.log(x)
    if (x == 0){
        return("Rock")
    } else if (x == 1){
        return("Paper")
    } else {
        return("Scissors")
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection = "Rock"){
        if(computerSelection = "Rock"){
            return("Draw! Rock vs Rock")
        } else if (computerSelection = "Paper"){
            return("You lose! Rock vs Paper, Paper beats Rock")
        } else {
            return("You win! Rock vs Scissors, Rock beats Scissors")
        }
    } else if (playerSelection = "Paper"){
        if(computerSelection = "Paper"){
            return("Draw! Paper vs Paper")
        }else if(computerSelection = "Scissors"){
            return("You lose! Paper vs Scissors, Scissors beats Paper")
        }else{
            return("You win! Paper vs Rock, Paper beats Rock")
        }
    } else {
        if(computerSelection = "Scissors"){
            return("Draw! Scissors vs Scissors")
        } else if (computerSelection = "Rock"){
            return("You lose! Scissors vs Rock, Rock beats Scissors")
        } else {
            return("You win! Scissors vs Paper, Scissors beats Paper")
        }
    }
}
//Test code
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

