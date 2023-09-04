const startButton = document.querySelector("#start-game-button");
const reloadButton = document.querySelector("#reload-game-button");
const gameMap = document.querySelector("#game-map");
const gameButtons = document.querySelectorAll(".game-button"); // Each area of the game has a button, defined here:
const resultText = document.querySelector("#result-text");

function Game() {
    this.turn = 1;
    this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
    // Game buttons => 0 = not selected; 1 = X; 2 = O
}

Game.prototype.startGame = () => {
    turn = 1; // 1 = X; 2 = O
    reloadButton.removeAttribute("disabled");

    for(button of gameButtons) {
        button.setAttribute("onclick", "game.clickButton(this)");
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
        gameButtons[buttonNumber].innerText = "X"
        game.gameButtonsState[buttonNumber] = 1;
        gameButtons[buttonNumber].removeAttribute("onclick");
        this.turn = 2;
    } else {
        gameButtons[buttonNumber].innerText = "O";
        game.gameButtonsState[buttonNumber] = 2;
        gameButtons[buttonNumber].removeAttribute("onclick");
        this.turn = 1;
    }
};

Game.prototype.checkWin = () => {
    return 0;
};

Game.prototype.reloadGame = () => {
    for(button of gameButtons) {
        button.innerText = "";
        button.removeAttribute("onclick", "game.clickButton(this)");
    }

    game.gameButtons = game.gameButtonsState.map(() => 1)
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
