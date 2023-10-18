import '../public/assets/css/style.css';

const startButton = document.querySelector("#start-game-button");
const reloadButton = document.querySelector("#reload-game-button");
const gameMap = document.querySelector("#game-map");
const gameButtons = document.querySelectorAll(".game-button");
const resultText = document.querySelector("#result-text");

class Game {
    constructor() {
        this.turn = 1; // Player "x" start the game
        this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
        // Game buttons => 0 = not selected; 1 = X; 2 = O
    }

    startGame() {
        this.turn = 1; // Set the turn; 1 = X; 2 = O
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

            resultText.innerText = 'Player "O" turn'; 
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
            if(this.gameButtonsState[0] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 1, 2, "X");
            }
            else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 1, 2, "O");
            }
        }

        else if(this.gameButtonsState[3] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[5] &&
            this.gameButtonsState[3] !== 0) {
            if(this.gameButtonsState[3] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(3, 4, 5, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(3, 4, 5, "O");
            }
        }

        else if(this.gameButtonsState[6] === this.gameButtonsState[7] && this.gameButtonsState[7] === this.gameButtonsState[8] &&
            this.gameButtonsState[6] !== 0) {
            if(this.gameButtonsState[6] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(6, 7, 8, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(6, 7, 8, "O");
            }
        }

        /* Verify if a player won by a vertical line */

        else if(this.gameButtonsState[0] === this.gameButtonsState[3] && this.gameButtonsState[3] === this.gameButtonsState[6] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 3, 6, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 3, 6, "O");
            }
        }

        else if(this.gameButtonsState[1] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[7] &&
            this.gameButtonsState[1] !== 0) {
            if(this.gameButtonsState[1] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(1, 4, 7, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(1, 4, 7, "O");
            }
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[5] && this.gameButtonsState[5] === this.gameButtonsState[8] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(2, 5, 8, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(2, 5, 8, "O");
            }
        }

        /* Verify if a player won by a diagonal line */
        else if(this.gameButtonsState[0] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[8] &&
            this.gameButtonsState[0] !== 0) {
            if(this.gameButtonsState[0] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 4, 8, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(0, 4, 8, "O");
            }
        }

        else if(this.gameButtonsState[2] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[6] &&
            this.gameButtonsState[2] !== 0) {
            if(this.gameButtonsState[2] === 1) { // Player "X" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "X"';

                // Change the images to show how the player won
                this.setImagesWinner(2, 4, 6, "X");
            } else { // Player "O" won
                thereIsAWinner = 1;
                resultText.innerText = 'Winner: Player "O"';

                // Change the images to show how the player won
                this.setImagesWinner(2, 4, 6, "O");
            }
        }
        
        // If no player won and all buttons were cliked, the match tied
        else if(this.gameButtonsState.filter(element => element !== 0).length === 9) {
            resultText.innerText = "Draw";
        }

        // Disable all buttons win there was a winner
        if(thereIsAWinner !== 0) {
            this.disableButtons();
        }
    }

    reloadGame() {
        this.cleanButtons();
        this.disableButtons();
    
        this.gameButtonsState = this.gameButtonsState.map(() => 0);
        resultText.innerText = "Press the start button to begin";
        startButton.disabled = false;
    }

    enableButtons() {
        for(let button of gameButtons) {
            button.onclick = () => this.clickButton(button);
        }
    }

    disableButtons() {
        for(let button of gameButtons) {
            button.onclick = null;
        }
    }

    cleanButtons() {
        for(let button of gameButtons) {
            button.style.backgroundImage = null;
        }
    }

    setImagesWinner(button1, button2, button3, winner) {
        if(winner === "X") {
            gameButtons[button1].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            gameButtons[button2].style.backgroundImage = "url(assets/img/x-image-winner.svg";
            gameButtons[button3].style.backgroundImage = "url(assets/img/x-image-winner.svg";
        } else {
            gameButtons[button1].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            gameButtons[button2].style.backgroundImage = "url(assets/img/o-image-winner.svg";
            gameButtons[button3].style.backgroundImage = "url(assets/img/o-image-winner.svg";
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
