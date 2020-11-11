## Contributors:
- **Brian Forbes**
- **Johnny Cassidy**
- [**Brian Forbes**](https://github.com/Codeherder19)
- [**Johnny Cassidy**](https://github.com/pJanks)


## Technologies Used:
- *JavaScript*
- *HTML5*
- *CSS3*
- *Flex-box and Flex-grid*
- *Github*
- *Google Chrome - Developer Console*

## Instructions for running/viewing the project:
What do you know, it's Tic-Tac-Toe! Swords vs Shield! You know how to play this classic game! Just click on a square and your token will be placed in the appropriate square. This is a two player version, no AI computer to play against. The current player's turn will be displayed at the top of the screen. When a win occurs, the winning player will be declared at the top of the screen. If there is a draw, you will be notified as well. Whether win or draw, simply wait a few seconds and the game will restart. Each players score will persist across each new game and page reload/refresh as well via local storage.

### Deploy Links
[Find the repo here](https://github.com/Codeherder19/Tic-Tac-Toe.git)

###Example of game display
![](https://i.imgur.com/0aVhaVL.png)

### Code Architecture
I started this project by only interacting with and designing the data model. I wrote methods in my classes so that I could play full games of tic tac toe in my console by only invoking one method on my game object, while only having one global variable in my main.js file which held an instantiation of my game object. My data model was responsible for keeping track of player moves, and comparing those moves to an array of win conditions in my game object. It would evaluate win and draw conditions, and it would populate a game board array while making sure tokens could not be replaced or overwritten once an indexed location was occupied. Once this functionality was complete, I moved on to building out the DOM. The DOM was responsbile for reflecting what's happening in the data model. If it was Player One or Player Two's turn, that should be displayed on the page. If there was a win or draw, that should also be displayed on the page. Player tokens should alternate as each player made a move on the board, and wins should be updated each time either player won a game. The main.js file held all of my query selectors and event listeners. My main.js was responsible for interacting with the game board via a click event, and it was also responsible for disabling and resetting the gameboard after a win/draw via a timeout method of 4 seconds. 

### Future Additions
1. I ran out of time, but I was going to add a button to reset each players wins, clearing the local storage, and clearing the game board and game data, effectively restarting the game.
2. Background images for the player columns instead of a linear gradient.
3. Boxes/borders around the wins in each player column and around the player turn/win/draw message at the top of the player column to improve readability/visibility. I learned a lot about HTML and CSS this project, but unfortunately I had to spend the majority of my time on functionality.

### WINS
1. Writing functionality for win/draw conditions.
2. Making it so no duplicate tokens can be placed on the board.
3. Disabling the board after a win or draw so no additional tokens can be placed in the grid.
4. Creating an octothorp in the center of the game board that responds to change in screen size.

### Challenges
1. All of the wins above were challenges.
2. Getting everything done in time for submission by 9pm on Tuesday November 10th.
3. Again, CSS styling. I feel like I could mess around with colors and styling for hours and hours and there is never enough time for me to
get things looking the way I want. I hope to get more practice over Thanksgiving break with CSS properties, color palettes, contrast, and setting up background images. I would like future projects to not require so much time to be spent on styling, especially when functionality can be very time consuming.
