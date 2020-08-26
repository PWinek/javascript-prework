var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, buttonK, buttonP, buttonN;


buttonK = document.getElementById("buttonK");
buttonP = document.getElementById("buttonP");
buttonN = document.getElementById("buttonN");

function buttonClicked(argButtonName){
	clearMessages();
	console.log(argButtonName + " został kliknięty");


	function getMoveName(argMoveId) {
	  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	  if (argMoveId == 1) {
	    return 'kamień';
	  }else if (argMoveId == 2) {
		return 'papier';
	  }else if (argMoveId == 3) {
		return 'nożyce';
	  } else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	    return 'kamień';
	  }
	}

	function displayResult(argPlayerMove, argComputerMove) {
	  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	  if (argPlayerMove == 'papier' && argComputerMove == 'kamień' ||
	  	  argPlayerMove == 'kamień' && argComputerMove == 'nożyce' ||
	  	  argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	    printMessage('Wygrywasz!');
	  } else if (argPlayerMove == argComputerMove) {
	  	printMessage('Remis! ');
	  } else {
	    printMessage('Przegrywasz! ');
	  }
	  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	}

	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
}

buttonK.addEventListener('click', function(){
    buttonClicked('kamień')
});

buttonP.addEventListener('click', function(){
    buttonClicked('papier')
});

buttonN.addEventListener('click', function(){
    buttonClicked('nożyce')
});