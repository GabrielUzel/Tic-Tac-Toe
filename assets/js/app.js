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

        this.enableButtons();
        startButton.disabled = true;
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
            gameButtons[buttonNumber].style.backgroundImage = "url(assets/img/x-image.svg)"; // Make the play

            this.gameButtonsState[buttonNumber] = 1; // Modify the array for check the winner move
            this.turn = 2; // Set the turn to the other player

            resultText.innerText = 'Player "O" turn'
        } else {
            gameButtons[buttonNumber].style.backgroundImage = "url(assets/img/o-image.svg)"; // Make the play

            this.gameButtonsState[buttonNumber] = 2; // Modify the array for check the winner move
            this.turn = 1; // Set the turn to the other player
            
            resultText.innerText = 'Player "X" turn';
        }
    
        gameButtons[buttonNumber].onclick = null; // Disable the button
    }

    checkWin() {
        let thereIsAWinner = 0;

        /* Verify if a player won by a horizontal line */
        if(this.gameButtonsState[0] === this.gameButtonsState[1] && this.gameButtonsState[1] === this.gameButtonsState[2] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[0].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[1].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[2].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            }
            else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[0].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[1].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[2].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        else if(this.gameButtonsState[3] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[5] &&
            this.gameButtonsState[3] !== 0) {
            if(this.gameButtonsState[3] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[3].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[5].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            }
            else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[3].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[5].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        else if(this.gameButtonsState[6] === this.gameButtonsState[7] && this.gameButtonsState[7] === this.gameButtonsState[8] &&
            this.gameButtonsState[6] !== 0) {
            if(this.gameButtonsState[6] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[6].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[7].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[6].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[7].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        /* Verify if a player won by a vertical line */

        else if(this.gameButtonsState[0] === this.gameButtonsState[3] && this.gameButtonsState[3] === this.gameButtonsState[6] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[0].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[3].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[6].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[0].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[3].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[6].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        else if(this.gameButtonsState[1] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[7] &&
            this.gameButtonsState[1] !== 0) {
            if(this.gameButtonsState[1] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[1].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[7].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[1].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[7].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[5] && this.gameButtonsState[5] === this.gameButtonsState[8] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[2].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[5].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[2].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[5].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        /* Verify if a player won by a diagonal line */
        else if(this.gameButtonsState[0] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[8] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[0].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[0].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[8].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[6] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                gameButtons[2].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/x-image-winner.svg";
                gameButtons[6].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            } else {
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                gameButtons[2].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[4].style.backgroundImage = "url(assets/img/o-image-winner.svg";
                gameButtons[6].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            }
        }
        
        // If no player won and all buttons were cliked, the match tied
        else if(this.gameButtonsState.filter(element => element !== 0).length === 9) {
            resultText.innerText = "Draw";
        }

        // Disable all buttons win there was a winner
        if(thereIsAWinner !== 0) {
            this.disablebuttons();
        }
    }

    reloadGame() {
        for(let button of gameButtons) {
            button.style.backgroundImage = null;
            button.onclick = null;
        }
    
        this.gameButtonsState = this.gameButtonsState.map(() => 0);
        resultText.innerText = "Press the start button to begin";
    }

    enableButtons() {
        for(let button of gameButtons) {
            button.onclick = () => this.clickButton(button);
        }
    }

    disablebuttons() {
        for(let button of gameButtons) {
            button.onclick = null;
        }
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
