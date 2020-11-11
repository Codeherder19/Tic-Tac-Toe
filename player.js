class Player {
  constructor(playerNumber, token) {
    this.token = token;
    this.numOfWins = 0;
    this.id = playerNumber;
    this.movesMade = [];
  }
  saveToStorage() {
    localStorage.setItem(`${this.id} numberOfWins`, JSON.stringify(this.numOfWins));
  }

  retrieveWinsFromStorage() {
    this.numOfWins = JSON.parse(localStorage.getItem(`${this.id} numberOfWins`));
  }
};
