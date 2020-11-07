var player1 = new Player('Player One', '☠️');

var player2 = new Player('Player Two', '👹');

var currentGame = new Game(player1, player2);

// to invoke function below to place a player one's token in the top right hand corner and therefore placing the player
// one token into the gameBoard array, you would write placePlayerToken(0)
function placePlayerToken(game, tokenLocation) {
  if (game.playerTurn === player1.id) {
    game.gameBoard.splice(tokenLocation, 1, player1.token);
    alternatePlayerTurns(currentGame);
    console.log(game.playerTurn);
  } else if (game.playerTurn === player2.id) {
    game.gameBoard.splice(tokenLocation, 1, player2.token);
    alternatePlayerTurns(currentGame);
    console.log(game.playerTurn);
  }
};

function alternatePlayerTurns(game) {
  if (game.playerTurn === player1.id) {
    game.playerTurn = 'Player Two';
  } else if (game.playerTurn === player2.id) {
    game.playerTurn = 'Player One';
  }
};

function resetGame() {
  currentGame = new Game;
}
