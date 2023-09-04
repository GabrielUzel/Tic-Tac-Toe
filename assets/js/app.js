const startButton = document.querySelector("#start-game-button");
const reloadButton = document.querySelector("#reload-game-button");
const gameMap = document.querySelector("#game-map");
const gameButtons = document.querySelectorAll(".game-button");
const resultText = document.querySelector("#result-text");

function Game() {
    this.turn = 1;
    this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
    // Game buttons => 0 = not selected; 1 = X; 2 = O
}

Game.prototype.startGame = () => {
    turn = 1; // Set the turn; 1 = X; 2 = O
    reloadButton.removeAttribute("disabled"); // Activate the reload button after the first start
    resultText.innerText = 'Player "X" turn';

    for(button of gameButtons) {
        button.setAttribute("onclick", "game.clickButton(this)"); // Enable the area buttons
    }
};

Game.prototype.clickButton = (button) => {
    if(button.id === "game-button-0") {
        game.selectButton(this.turn, 0);
        game.checkWin();
    }

    if(button.id === "game-button-1") { 
        game.selectButton(this.turn, 1);
        game.checkWin();
    }

    if(button.id === "game-button-2") { 
        game.selectButton(this.turn, 2);
        game.checkWin();
    }

    if(button.id === "game-button-3") { 
        game.selectButton(this.turn, 3);
        game.checkWin();
    }

    if(button.id === "game-button-4") { 
        game.selectButton(this.turn, 4);
        game.checkWin();
    }

    if(button.id === "game-button-5") { 
        game.selectButton(this.turn, 5);
        game.checkWin();
    }

    if(button.id === "game-button-6") { 
        game.selectButton(this.turn, 6);
        game.checkWin();
    }

    if(button.id === "game-button-7") { 
        game.selectButton(this.turn, 7);
        game.checkWin();
    }

    if(button.id === "game-button-8") { 
        game.selectButton(this.turn, 8);
        game.checkWin();
    }
};

Game.prototype.selectButton = (turn, buttonNumber) => {
    if(turn === 1) {
        gameButtons[buttonNumber].innerText = "X" // Make the play
        game.gameButtonsState[buttonNumber] = 1; // Modify the array for check the winner move
        this.turn = 2; // Set the turn to the other player
        resultText.innerText = 'Player "O" turn'
    } else {
        gameButtons[buttonNumber].innerText = "O"; // Make the play
        game.gameButtonsState[buttonNumber] = 2; // Modify the array for check the winner move
        this.turn = 1; // Set the turn to the other player
        resultText.innerText = 'Player "X" turn';
    }

    gameButtons[buttonNumber].removeAttribute("onclick"); // Disable the button
};

Game.prototype.checkWin = () => {

    
    // If no player won and all buttons were cliked, the match tied
    if(game.gameButtonsState.filter(element => element !== 0).length === 9) resultText.innerText = "Draw"; 
};

Game.prototype.reloadGame = () => {
    for(button of gameButtons) {
        button.innerText = "";
        button.removeAttribute("onclick", "game.clickButton(this)");
    }

    game.gameButtons = game.gameButtonsState.map(() => 0);
    resultText.innerText = "Press the start button to begin";
};

const game = new Game();
startButton.addEventListener("click", e => {
    e.preventDefault();
    game.startGame();
});

reloadButton.addEventListener("click", e => {
    e.preventDefault();
    game.reloadGame();
});
