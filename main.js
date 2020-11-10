var currentGame = new Game;
var ticTacToeBoard = document.querySelector('.game-board');
var player1Token = document.querySelector('#shield');
var player2Token = document.querySelector('#swords');
var tokenSquare = document.querySelectorAll('.game-square');
var currentTurnDisplay = document.querySelector('.current-player-turn');
var player1WinDisplay = document.querySelector('.player-1-score');
var player2WinDisplay = document.querySelector('.player-2-score');


ticTacToeBoard.addEventListener('click', placeTokenOnGameBoard);
window.addEventListener('load', persistPlayerWinsOnPageReload);




function placeTokenOnGameBoard(event) {
  currentGame.placeTokenInOpenGameBoardSlot(event.target.id);
  // displayCurrentPlayerWins();
  alternateAndDisplayPlayerTokens();
  currentGame.alternatePlayerTurns();
  displayCurrentPlayersTurn();
};

function displayCurrentPlayersTurn() {
  if (currentGame.playerTurn === currentGame.player1.id) {
    currentTurnDisplay.innerText = `It's ${currentGame.player1.id}'s turn!'`
  }
  else if (currentGame.playerTurn === currentGame.player2.id) {
    currentTurnDisplay.innerText = `It's ${currentGame.player2.id}'s turn!'`
  }
};

function alternateAndDisplayPlayerTokens() {
  if (currentGame.playerTurn === currentGame.player1.id) {
    tokenSquare[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player1.token}</div>`
  } else if (currentGame.playerTurn === currentGame.player2.id) {
    tokenSquare[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player2.token}</div>`
  }
};

function persistPlayerWinsOnPageReload() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
};

// function displayCurrentPlayerWins() {
//   if (currentGame.isThereAWinner === true) {
//     player1WinDisplay.innerText = currentGame.player1.numOfWins;
//     player2WinDisplay.innerText = currentGame.player2.numOfWins;
//   }
//};
