let playGame = confirm("Shall we play Rock, Paper, or Scissors?");
if (playGame){
    let playerChoice = prompt("Please enter rock, paper, or scissors");
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
        ){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result = 
                playerOne === computer
                    ? "Tie Game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer} \n Computer Wins!`
                    : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne Wins!`;
            alert(result);
            let playAgain = confirm("Play Again?"); 
            playAgain ? location.reload() : alert("OK, Thanks for playing!")
                      
        } else{
            alert("You didn't enter rock, paper, or scissors");
        }

    } else {
        alert("I guess you changed your mind, maybe next time.");
    }


} else {
    alert("OK, maybe next time!");
}