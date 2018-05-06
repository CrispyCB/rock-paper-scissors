 let ComputerSelection;
 let PlayerSelection;
 let Select;
 let playerScore;
 let computerScore;
 let rndCnt;
 function ComputerPlay(){
  var CompSelect = ["ROCK", "PAPER", "SCISSORS"];
  var rand = CompSelect[Math.floor(Math.random() * CompSelect.length)];
  ComputerSelection = rand;
  return ComputerSelection;
}
function PlayerChoice (Select){
  Select = prompt("Choose ROCK, PAPER or SCISSORS");
  PlayerSelection = Select.toUpperCase();
  return PlayerSelection;
}
function round (ComputerSelection,PlayerSelection){
playerScore = 0;
computerScore = 0;
rndCnt = 0;
  if (ComputerSelection == "ROCK" && PlayerSelection == "SCISSORS"){
    computerScore++;
    rndCnt++;
    return "You lose! Rock beats Scissors!";
  }
  if (ComputerSelection == "ROCK" && PlayerSelection == "PAPER"){
    playerScore++;
    rndCnt++;
  return "You win! Paper beats Rock!";
  }
  if (ComputerSelection == "PAPER" && PlayerSelection == "SCISSORS"){
    playerScore++;
    rndCnt++;
    return "You win! Scissors beats Paper!" ;
  }
  if (ComputerSelection == "PAPER" && PlayerSelection == "ROCK"){
    computerScore++;
    rndCnt++;
    return "You lose! Paper beats Rock!";
  }
  if (ComputerSelection == "SCISSORS" && PlayerSelection == "PAPER"){
    computerScore++;
    rndCnt++;
    return "You lose! Scissors beats Paper!";
  }
  if (ComputerSelection == "SCISSORS" && PlayerSelection == "ROCK"){
    playerScore++;
    rndCnt++;
    return "You win! Rock beats Scissors!";
  }
  if (ComputerSelection == PlayerSelection) {
    rndCnt++;
    return "It's a tie!"
  }
}
function startGame() {
  document.querySelector("#pchoice").innerHTML = PlayerChoice (Select);  
  document.querySelector("#cchoice").innerHTML = ComputerPlay(ComputerSelection);
  document.querySelector("#rdisplay").innerHTML = " " + round (ComputerSelection,PlayerSelection);
  document.querySelector("#sdisplay").innerHTML = " " + playerScore;
  document.querySelector("#cdisplay").innerHTML = " " + computerScore;
  document.querySelector("#round").innerHTML + " " + rndCnt;
}
document.addEventListener('DOMContentLoaded', () => {
for (var r = 0; r < 5; r++){
   startGame();
}
  });