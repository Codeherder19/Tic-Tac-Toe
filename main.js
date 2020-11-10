var currentGame = new Game;
var ticTacToeBoard = document.querySelector('.game-board');
var player1Token = document.querySelector('#shield');
var player2Token = document.querySelector('#swords');
var tokenSquare = document.querySelectorAll('.game-square');


ticTacToeBoard.addEventListener('click', placeTokenOnGameBoard);
window.addEventListener('load', persistPlayerWinsOnPageReload);




function placeTokenOnGameBoard(event) {
  currentGame.placeTokenInOpenGameBoardSlot(event.target.id);
  alternatePlayerTokens();
  currentGame.alternatePlayerTurns();
};

function alternatePlayerTokens() {
  if (currentGame.playerTurn === currentGame.player1.id) {
    tokenSquare[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player1.token}</div>`
  } else if (currentGame.playerTurn === currentGame.player2.id) {
    tokenSquare[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player2.token}</div>`
  }
};

function persistPlayerWinsOnPageReload() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
}
