
"use strict";
const choices = [
"Rock",
"Paper",
"Scissors"
]
let ComputerSelection;
let PlayerSelection;
let Select;
let playerScore = 0;
let computerScore = 0;
let rndCnt = 0;

function ComputerPlay() {
var rand = choices[Math.floor(Math.random() * choices.length)];
ComputerSelection = rand;
return ComputerSelection;
}

function PlayerChoice(Choice){
PlayerSelection = Choice;
ComputerPlay();
Display(round());
}

function round() {

switch (true) {
  case ComputerSelection == choices[0] && PlayerSelection == choices[2]:
  case ComputerSelection == choices[1] && PlayerSelection == choices[0]:
  case ComputerSelection == choices[2] && PlayerSelection == choices[1]:
    rndCnt++;
    computerScore++;
    return "You lose! " + ComputerSelection + " beats " + PlayerSelection + "!";
  case ComputerSelection == choices[2] && PlayerSelection == choices[0]:
  case ComputerSelection == choices[0] && PlayerSelection == choices[1]:
  case ComputerSelection == choices[1] && PlayerSelection == choices[2]:
      rndCnt++;
      playerScore++;
      return "You win! " + PlayerSelection + " beats " + ComputerSelection + "!";
  default:
    rndCnt++;
    return "It's a tie!"
}
}

function Display(result) {
document.querySelector("#pchoice").innerHTML = PlayerSelection;
document.querySelector("#cchoice").innerHTML = ComputerSelection;
document.querySelector("#rdisplay").innerHTML = " " + result;
document.querySelector("#sdisplay").innerHTML = " " + playerScore;
document.querySelector("#cdisplay").innerHTML = " " + computerScore;
document.querySelector("#round").innerHTML = "The current round is: " + rndCnt;
}
function startGame (){
  for (var r = 0; r < 5; r++) {
    Display(result)
  }
}