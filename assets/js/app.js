const startButton = document.querySelector("#start-game-button");
const reloadButton = document.querySelector("#reload-game-button");
const gameMap = document.querySelector("#game-map");
const gameButtons = document.querySelectorAll(".game-button");
const resultText = document.querySelector("#result-text");

class Game {
    constructor() {
        this.turn = 1;
        this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
        // Game buttons => 0 = not selected; 1 = X; 2 = O
    }

    startGame() {
        this.turn = 1;// Set the turn; 1 = X; 2 = O
        reloadButton.removeAttribute("disabled"); // Activate the reload button after the first start
        resultText.innerText = 'Player "X" turn';

        for(let button of gameButtons) {
            button.onclick = () => this.clickButton(button);
        }
    }

    clickButton(button) {
        if(button.id === "game-button-0") this.selectButton(this.turn, 0);
        if(button.id === "game-button-1") this.selectButton(this.turn, 1);
        if(button.id === "game-button-2") this.selectButton(this.turn, 2);
        if(button.id === "game-button-3") this.selectButton(this.turn, 3);
        if(button.id === "game-button-4") this.selectButton(this.turn, 4);
        if(button.id === "game-button-5") this.selectButton(this.turn, 5);
        if(button.id === "game-button-6") this.selectButton(this.turn, 6);
        if(button.id === "game-button-7") this.selectButton(this.turn, 7);
        if(button.id === "game-button-8") this.selectButton(this.turn, 8);

        this.checkWin();
    }

    selectButton(turn, buttonNumber) {
        if(turn === 1) {
            gameButtons[buttonNumber].innerText = "X" // Make the play

            this.gameButtonsState[buttonNumber] = 1; // Modify the array for check the winner move
            this.turn = 2; // Set the turn to the other player

            resultText.innerText = 'Player "O" turn'
        } else {
            gameButtons[buttonNumber].innerText = "O"; // Make the play

            this.gameButtonsState[buttonNumber] = 2; // Modify the array for check the winner move
            this.turn = 1; // Set the turn to the other player
            
            resultText.innerText = 'Player "X" turn';
        }
    
         // Disable the button
    }

    checkWin() {
        let winner = 0;

        /* Verify if a player won by a horizontal line */
        if(this.gameButtonsState[0] === this.gameButtonsState[1] && this.gameButtonsState[1] === this.gameButtonsState[2] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            }
            else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[0].setAttribute("style", "color: red");
            gameButtons[1].setAttribute("style", "color: red");
            gameButtons[2].setAttribute("style", "color: red");
        }

        else if(this.gameButtonsState[3] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[5] &&
            this.gameButtonsState[3] !== 0) {
            if(this.gameButtonsState[3] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            }
            else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[3].setAttribute("style", "color: red");
            gameButtons[4].setAttribute("style", "color: red");
            gameButtons[5].setAttribute("style", "color: red");
        }

        else if(this.gameButtonsState[6] === this.gameButtonsState[7] && this.gameButtonsState[7] === this.gameButtonsState[8] &&
            this.gameButtonsState[6] !== 0) {
            if(this.gameButtonsState[6] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[6].setAttribute("style", "color: red");
            gameButtons[7].setAttribute("style", "color: red");
            gameButtons[8].setAttribute("style", "color: red");
        }

        /* Verify if a player won by a vertical line */

        else if(this.gameButtonsState[0] === this.gameButtonsState[3] && this.gameButtonsState[3] === this.gameButtonsState[6] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[0].setAttribute("style", "color: red");
            gameButtons[3].setAttribute("style", "color: red");
            gameButtons[6].setAttribute("style", "color: red");
        }

        else if(this.gameButtonsState[1] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[7] &&
            this.gameButtonsState[1] !== 0) {
            if(this.gameButtonsState[1] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[1].setAttribute("style", "color: red");
            gameButtons[4].setAttribute("style", "color: red");
            gameButtons[7].setAttribute("style", "color: red");
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[5] && this.gameButtonsState[5] === this.gameButtonsState[8] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[2].setAttribute("style", "color: red");
            gameButtons[5].setAttribute("style", "color: red");
            gameButtons[8].setAttribute("style", "color: red");
        }

        /* Verify if a player won by a diagonal line */
        else if(this.gameButtonsState[0] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[8] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[0].setAttribute("style", "color: red");
            gameButtons[4].setAttribute("style", "color: red");
            gameButtons[8].setAttribute("style", "color: red");
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[6] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) {
                winner = 1;
                resultText.innerText = 'Winner: Player "X"';
            } else {
                winner = 2;
                resultText.innerText = 'Winner: Player "O"';
            }

            gameButtons[2].setAttribute("style", "color: red");
            gameButtons[4].setAttribute("style", "color: red");
            gameButtons[6].setAttribute("style", "color: red");
        }
        
        // If no player won and all buttons were cliked, the match tied
        else if(this.gameButtonsState.filter(element => element !== 0).length === 9) {
            resultText.innerText = "Draw";

            for(let button of gameButtons) {
                button.onclick = null;
            }
        }

        if(winner !== 0) {
            for(let button of gameButtons) {
                button.onclick = null;
            }
        }
    }

    reloadGame() {
        for(let button of gameButtons) {
            button.innerText = "";
            button.removeEventListener("click");
            button.setAttribute("style", "color: black");
        }
    
        gameButtonsState = gameButtonsState.map(() => 0);
        resultText.innerText = "Press the start button to begin";
    }
}

const game = new Game();
startButton.addEventListener("click", e => {
    e.preventDefault();
    game.startGame();
});

reloadButton.addEventListener("click", e => {
    e.preventDefault();
    game.reloadGame();
});
