var currentGame = new Game;
var ticTacToeBoard = document.querySelectorAll('.game-square');



// ticTacToeBoard.addEventListener('click', );
window.addEventListener('load', persistPlayerWinsOnPageReload);




function placeTokenOnGameBoard() {
  
}

function persistPlayerWinsOnPageReload() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
}
