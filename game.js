class Game {
  constructor() {
    this.winConditions = [[0, 4, 8],[2, 4, 6],[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8]];
    this.player1 = new Player('Player One', '☠️');
    this.player2 = new Player('Player Two', '👹');
    this.playerTurn = 'Player One';
    this.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  checkForWinconditions() {

  }

  checkForDraw() {
    var startingBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!this.gameboard.includes(startingBoard)) {
    return "This game is a draw";
    }
  };

  placeTokenInOpenGameBoardSlot(game, tokenLocation) {
    if (this.player1.token && this.player2.token !== this.gameBoard[tokenLocation]) {
      this.placePlayerToken(game, tokenLocation);
    }
  };

  placePlayerToken(game, tokenLocation) {
    if (game.playerTurn === this.player1.id) {
    game.gameBoard.splice(tokenLocation, 1, this.player1.token);
    this.alternatePlayerTurns();
  } else if (game.playerTurn === this.player2.id) {
    game.gameBoard.splice(tokenLocation, 1, this.player2.token);
    this.alternatePlayerTurns();
    }
  };

  alternatePlayerTurns() {
    if (this.playerTurn === this.player1.id) {
    this.playerTurn = 'Player Two';
  } else if (this.playerTurn === this.player2.id) {
    this.playerTurn = 'Player One';
    }
  };


//   PlacePlayerTokenInOpenSlotOnly(game, tokenLocation) {
//     for (var i = 0; i < this.gameBoard.length; i++) {
//       if (this.gameBoard[i] !== this.player1.token && this.player2.token) {
//         this.placePlayerToken(game, tokenLocation);
//       }
//     }
//   }
}
