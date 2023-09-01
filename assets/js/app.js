const startButton = document.querySelector("#start-game-button");
const gameMap = document.querySelector("#game-map");

function factoryGame() {
    return {
        turn : 1,
        // Each area of the game has a button, defined here:
        gameButtons: document.querySelectorAll(".game-button"),
        // Game buttons => 0 = not selected; 1 = X; 2 = O
        gameButtonsState: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Array to verify the winner

        startGame() {
            this.turn = 1 // 1 = X; 2 = O

            gameMap.addEventListener("click", element => {
                this.clickButton(element.target);
            })
        },

        clickButton(button) {
            if(button.id === "game-button-1") this.selectButton(this.turn, 0);
            if(button.id === "game-button-2") this.selectButton(this.turn, 1);
            if(button.id === "game-button-3") this.selectButton(this.turn, 2);
            if(button.id === "game-button-4") this.selectButton(this.turn, 3);
            if(button.id === "game-button-5") this.selectButton(this.turn, 4);
            if(button.id === "game-button-6") this.selectButton(this.turn, 5);
            if(button.id === "game-button-7") this.selectButton(this.turn, 6);
            if(button.id === "game-button-8") this.selectButton(this.turn, 7);
            if(button.id === "game-button-9") this.selectButton(this.turn, 8);
        },

        selectButton(turn, buttonNumber) { 
            if(turn === 1) {
                this.gameButtons[buttonNumber].innerText = "X"
                this.turn = 0;
            } else {
                this.gameButtons[buttonNumber].innerText = "O"
                this.turn = 1;
            }
        },

        checkWin() {
            return 0;
        },

        reloadGame() {
            for(button of this.gameButtons) {
                button.innerText = "";
            }
        }
    };
}

const game = factoryGame();
startButton.addEventListener("click", e => {
    e.preventDefault();
    game.startGame();
});
