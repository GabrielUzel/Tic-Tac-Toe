const startButton = document.querySelector("#start-game-button");
const gameMap = document.querySelector("#game-map");
const gameButtons = document.querySelectorAll(".game-button"); // Each area of the game has a button, defined here:

function Game() {
    this.turn = 1;
    this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
    // Game buttons => 0 = not selected; 1 = X; 2 = O
}

Game.prototype.startGame = () => {
    turn = 1; // 1 = X; 2 = O

    for(button of gameButtons) {
        button.setAttribute("onclick", "game.clickButton(this)");
    }


};

Game.prototype.clickButton = (button) => {
    if(button.id === "game-button-0") game.selectButton(this.turn, 0);
    if(button.id === "game-button-1") game.selectButton(this.turn, 1);
    if(button.id === "game-button-2") game.selectButton(this.turn, 2);
    if(button.id === "game-button-3") game.selectButton(this.turn, 3);
    if(button.id === "game-button-4") game.selectButton(this.turn, 4);
    if(button.id === "game-button-5") game.selectButton(this.turn, 5);
    if(button.id === "game-button-6") game.selectButton(this.turn, 6);
    if(button.id === "game-button-7") game.selectButton(this.turn, 7);
    if(button.id === "game-button-8") game.selectButton(this.turn, 8);
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
    for(button of this.gameButtons) {
        button.innerText = "";
        gameButtonsState = gameButtonsState.map(() => 0);
    }
};

const game = new Game();
startButton.addEventListener("click", e => {
    e.preventDefault();
    game.startGame();
});
