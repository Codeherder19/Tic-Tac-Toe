class Game {
  constructor(player1, player2) {
    this.winConditions = [[0, 4, 8],[2, 4, 6],[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8]];
    this.players = [player1, player2];
    this.playerTurn = 'Player One';
    this.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  checkForWinconditions() {

  }
  checkForDraw() {
    var startingBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!this.gameboard.includes(startingBoard);
    return "This game is a draw";
  }
}
