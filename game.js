class Game {
  constructor() {
    this.winConditions = [[2, 4, 6],[0, 1, 2],[3, 4, 5],[0, 4, 8],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8]];
    this.player1 = new Player('Player One', '⚔️');
    this.player2 = new Player('Player Two', '🛡');
    this.playerTurn = this.player1.id;
    this.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.isThereAWinner = false;
  }

  checkForWinOrDrawConditions(currentPlayer) {
    for (var i = 0; i < this.winConditions.length; i++) {
      if (currentPlayer.movesMade.includes(this.winConditions[i][0]) && currentPlayer.movesMade.includes(this.winConditions[i][1]) && currentPlayer.movesMade.includes(this.winConditions[i][2])) {
        console.log(`${currentPlayer.id} WINS!!!`)
        currentPlayer.numOfWins++;
        currentPlayer.saveToStorage();
        this.isThereAWinner = true;
      }
    }
    if (this.isThereAWinner === false) {
      this.checkForDraw();
    }
  };

  resetGameBoard() {
    var newGameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.player1.movesMade.length = 0;
    this.player2.movesMade.length = 0;
    this.gameBoard.length = 0;
    this.playerTurn = this.player1.id;
    for (var i = 0; i < newGameBoard.length; i++) {
      this.gameBoard.push(newGameBoard[i]);
    }
  };

  checkForDraw() {
    if (this.player1.movesMade.length + this.player2.movesMade.length === 9) {
      console.log('This game is a draw!!!');
    }
  };

  placeTokenInOpenGameBoardSlot(tokenLocation) {
    if (this.player1.token && this.player2.token !== this.gameBoard[tokenLocation]) {
      this.placePlayerToken(tokenLocation);
    }
  };

  placePlayerToken(tokenLocation) {
    if (this.playerTurn === this.player1.id) {
    this.gameBoard.splice(tokenLocation, 1, this.player1.token);
    this.player1.movesMade.push(parseInt(tokenLocation));
    this.checkForWinOrDrawConditions(this.player1);
  } else if (this.playerTurn === this.player2.id) {
    this.gameBoard.splice(tokenLocation, 1, this.player2.token);
    this.player2.movesMade.push(parseInt(tokenLocation));
    this.checkForWinOrDrawConditions(this.player2);
    }
  };

  alternatePlayerTurns() {
    if (this.playerTurn === this.player1.id) {
    this.playerTurn = this.player2.id;
  } else if (this.playerTurn === this.player2.id) {
    this.playerTurn = this.player1.id;
    }
  };
};
