var tokenSquares = document.querySelectorAll('.game-square');
var currentGame = new Game;
var ticTacToeBoard = document.querySelector('.game-board');
var currentTurnDisplay = document.querySelector('.current-player-turn');
var player1WinDisplay = document.querySelector('.player-1-score');
var player2WinDisplay = document.querySelector('.player-2-score');

ticTacToeBoard.addEventListener('click', placeTokenOnGameBoard);
window.addEventListener('load', persistPlayerWinsOnPageReload);

function placeTokenOnGameBoard(event) {
  currentGame.placeTokenInOpenGameBoardSlot(event.target.id);
  displayCurrentPlayerWins();
  alternateAndDisplayPlayerTokens();
  displayPlayerTurnOrWinOrDrawMessage()
};

function displayCurrentPlayerWins() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  player1WinDisplay.innerText = currentGame.player1.numOfWins;
  player2WinDisplay.innerText = currentGame.player2.numOfWins;
};

function alternateAndDisplayPlayerTokens() {
  if (currentGame.playerTurn === currentGame.player1.id) {
    tokenSquares[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player1.token}</div>`;
  } else if
    (currentGame.playerTurn === currentGame.player2.id) {
    tokenSquares[event.target.id].innerHTML = `<div class='in-game-token'>${currentGame.player2.token}</div>`;
  }
};

function displayPlayerTurnOrWinOrDrawMessage() {
  if (currentGame.isThereAWinner === false && currentGame.player1.movesMade.length + currentGame.player2.movesMade.length === 9) {
    currentTurnDisplay.innerText = 'Oh no, draw game!';
    disableBoardAtGameEndEnableBoardAtGameStart();
    setTimeout(startNewGame, 4000);
  } else if
    (currentGame.isThereAWinner === true) {
    currentTurnDisplay.innerText = `${currentGame.playerTurn} WINS!!!`;
    disableBoardAtGameEndEnableBoardAtGameStart();
    setTimeout(startNewGame, 4000);
  } else {
    currentGame.alternatePlayerTurns();
    displayCurrentPlayersTurn();
  }
};

function disableBoardAtGameEndEnableBoardAtGameStart() {
  ticTacToeBoard.classList.toggle('disable-cursor');
};

function startNewGame() {
  currentGame.resetGameBoard();
  clearGameBoard();
  disableBoardAtGameEndEnableBoardAtGameStart();
  displayCurrentPlayersTurn();
};

function clearGameBoard() {
  for (var i = 0; i < tokenSquares.length; i++) {
    tokenSquares[i].innerText = '';
  }
};

function displayCurrentPlayersTurn() {
  if (currentGame.playerTurn === currentGame.player1.id) {
    currentTurnDisplay.innerText = `It's ${currentGame.player1.id}'s turn!'`;
  } else if
    (currentGame.playerTurn === currentGame.player2.id) {
    currentTurnDisplay.innerText = `It's ${currentGame.player2.id}'s turn!'`;
  }
};

function persistPlayerWinsOnPageReload() {
  if (localStorage.length < 2) {
    currentGame.player1.saveToStorage();
    currentGame.player2.saveToStorage();
  }
    currentGame.player1.retrieveWinsFromStorage();
    currentGame.player2.retrieveWinsFromStorage();
    displayCurrentPlayerWins();
};
