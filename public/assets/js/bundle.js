/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var startButton = document.querySelector("#start-game-button");
var reloadButton = document.querySelector("#reload-game-button");
var gameMap = document.querySelector("#game-map");
var gameButtons = document.querySelectorAll(".game-button");
var resultText = document.querySelector("#result-text");
var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.turn = 1; // Player "x" start the game
    this.gameButtonsState = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to verify the winner 
    // Game buttons => 0 = not selected; 1 = X; 2 = O
  }
  _createClass(Game, [{
    key: "startGame",
    value: function startGame() {
      this.turn = 1; // Set the turn; 1 = X; 2 = O
      resultText.innerText = 'Player "X" turn';
      this.enableButtons();
      startButton.disabled = true;
    }
  }, {
    key: "clickButton",
    value: function clickButton(button) {
      if (button.id === "game-button-0") this.selectButton(this.turn, 0);
      if (button.id === "game-button-1") this.selectButton(this.turn, 1);
      if (button.id === "game-button-2") this.selectButton(this.turn, 2);
      if (button.id === "game-button-3") this.selectButton(this.turn, 3);
      if (button.id === "game-button-4") this.selectButton(this.turn, 4);
      if (button.id === "game-button-5") this.selectButton(this.turn, 5);
      if (button.id === "game-button-6") this.selectButton(this.turn, 6);
      if (button.id === "game-button-7") this.selectButton(this.turn, 7);
      if (button.id === "game-button-8") this.selectButton(this.turn, 8);
      this.checkWin();
    }
  }, {
    key: "selectButton",
    value: function selectButton(turn, buttonNumber) {
      if (turn === 1) {
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
  }, {
    key: "checkWin",
    value: function checkWin() {
      var thereIsAWinner = 0;

      /* Verify if a player won by a horizontal line */
      if (this.gameButtonsState[0] === this.gameButtonsState[1] && this.gameButtonsState[1] === this.gameButtonsState[2] && this.gameButtonsState[0] !== 0) {
        if (this.gameButtonsState[0] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 1, 2, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 1, 2, "O");
        }
      } else if (this.gameButtonsState[3] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[5] && this.gameButtonsState[3] !== 0) {
        if (this.gameButtonsState[3] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(3, 4, 5, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(3, 4, 5, "O");
        }
      } else if (this.gameButtonsState[6] === this.gameButtonsState[7] && this.gameButtonsState[7] === this.gameButtonsState[8] && this.gameButtonsState[6] !== 0) {
        if (this.gameButtonsState[6] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(6, 7, 8, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(6, 7, 8, "O");
        }
      }

      /* Verify if a player won by a vertical line */else if (this.gameButtonsState[0] === this.gameButtonsState[3] && this.gameButtonsState[3] === this.gameButtonsState[6] && this.gameButtonsState[0] !== 0) {
        if (this.gameButtonsState[0] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 3, 6, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 3, 6, "O");
        }
      } else if (this.gameButtonsState[1] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[7] && this.gameButtonsState[1] !== 0) {
        if (this.gameButtonsState[1] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(1, 4, 7, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(1, 4, 7, "O");
        }
      } else if (this.gameButtonsState[2] === this.gameButtonsState[5] && this.gameButtonsState[5] === this.gameButtonsState[8] && this.gameButtonsState[2] !== 0) {
        if (this.gameButtonsState[2] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(2, 5, 8, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(2, 5, 8, "O");
        }
      }

      /* Verify if a player won by a diagonal line */else if (this.gameButtonsState[0] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[8] && this.gameButtonsState[0] !== 0) {
        if (this.gameButtonsState[0] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 4, 8, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(0, 4, 8, "O");
        }
      } else if (this.gameButtonsState[2] === this.gameButtonsState[4] && this.gameButtonsState[4] === this.gameButtonsState[6] && this.gameButtonsState[2] !== 0) {
        if (this.gameButtonsState[2] === 1) {
          // Player "X" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "X"';

          // Change the images to show how the player won
          this.setImagesWinner(2, 4, 6, "X");
        } else {
          // Player "O" won
          thereIsAWinner = 1;
          resultText.innerText = 'Winner: Player "O"';

          // Change the images to show how the player won
          this.setImagesWinner(2, 4, 6, "O");
        }
      }

      // If no player won and all buttons were cliked, the match tied
      else if (this.gameButtonsState.filter(function (element) {
        return element !== 0;
      }).length === 9) {
        resultText.innerText = "Draw";
      }

      // Disable all buttons win there was a winner
      if (thereIsAWinner !== 0) {
        this.disableButtons();
      }
    }
  }, {
    key: "reloadGame",
    value: function reloadGame() {
      this.cleanButtons();
      this.disableButtons();
      this.gameButtonsState = this.gameButtonsState.map(function () {
        return 0;
      });
      resultText.innerText = "Press the start button to begin";
      startButton.disabled = false;
    }
  }, {
    key: "enableButtons",
    value: function enableButtons() {
      var _this = this;
      var _iterator = _createForOfIteratorHelper(gameButtons),
        _step;
      try {
        var _loop = function _loop() {
          var button = _step.value;
          button.onclick = function () {
            return _this.clickButton(button);
          };
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "disableButtons",
    value: function disableButtons() {
      var _iterator2 = _createForOfIteratorHelper(gameButtons),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var button = _step2.value;
          button.onclick = null;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "cleanButtons",
    value: function cleanButtons() {
      var _iterator3 = _createForOfIteratorHelper(gameButtons),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var button = _step3.value;
          button.style.backgroundImage = null;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "setImagesWinner",
    value: function setImagesWinner(button1, button2, button3, winner) {
      if (winner === "X") {
        gameButtons[button1].style.backgroundImage = "url(assets/img/x-image-winner.svg";
        gameButtons[button2].style.backgroundImage = "url(assets/img/x-image-winner.svg";
        gameButtons[button3].style.backgroundImage = "url(assets/img/x-image-winner.svg";
      } else {
        gameButtons[button1].style.backgroundImage = "url(assets/img/o-image-winner.svg";
        gameButtons[button2].style.backgroundImage = "url(assets/img/o-image-winner.svg";
        gameButtons[button3].style.backgroundImage = "url(assets/img/o-image-winner.svg";
      }
    }
  }]);
  return Game;
}();
var game = new Game();
startButton.addEventListener("click", function (e) {
  e.preventDefault();
  game.startGame();
});
reloadButton.addEventListener("click", function (e) {
  e.preventDefault();
  game.reloadGame();
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map