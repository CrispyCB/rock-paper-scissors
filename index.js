function ComputerPlay(){
    var CompSelect = ['ROCK', 'PAPER', 'SCISSORS'];
    var rand = CompSelect[Math.floor(Math.random() * CompSelect.length)];
    ComputerSelection = rand;
    return ComputerSelection;
  }
  console.log(ComputerPlay());
  function PlayerChoice (Select){
    var Select = prompt("Choose ROCK, PAPER or SCISSORS");
    PlayerSelection = Select.toUpperCase();
    return PlayerSelection;
  }
  console.log(PlayerChoice());
  function round (ComputerSelection,PlayerSelection){
    if (ComputerSelection == 'ROCK' && PlayerSelection == 'SCISSORS'){
      return 'You lose! Rock beats Scissors!';
    }
    if (ComputerSelection == 'ROCK' && PlayerSelection == 'PAPER'){
    return 'You win! Paper beats Rock!';
    }
    if (ComputerSelection == 'PAPER' && PlayerSelection == 'SCISSORS'){
      return 'You win! Scissors beats Paper!' ;
    }
    if (ComputerSelection == 'PAPER' && PlayerSelection == 'ROCK'){
      return 'You win! Paper beats Rock!';
    }
    if (ComputerSelection == 'SCISSORS' && PlayerSelection == 'PAPER'){
      return 'You lose! Scissors beats Paper!';
    }
    if (ComputerSelection == 'SCISSORS' && PlayerSelection == 'ROCK'){
      return 'You win! ROCK beats SCISSORS!';
    }
  }
  console.log(round(ComputerSelection,PlayerSelection));