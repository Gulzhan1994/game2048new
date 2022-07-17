import Board from './board.js';
export const scoreDisplay = document.querySelector('.score');
export const resultDisplay = document.querySelector('.result');

// GameManager отвечает за общую игровую логику, начать игру, проследить не окончена ли игра, есть ли победитель и подобная логика
class GameManager {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
        this.board = null;
    }
    init() {
        this.board = new Board();
        this.board.init();
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl.bind(this));
    }
    clickControl(event) {
        if (event.key === 'ArrowUp') {
            this.board.movingColumn('up');
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowDown') {
            this.board.movingColumn('down');
            this.board.combineColumn();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowRight') {
            this.board.movingRow('right');
            this.board.combineRow();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowLeft') {
            this.board.movingRow('left');
            this.board.combineRow();
            this.board.generateNewCell();
        }
    }
    checkForGameOver() {
        const zeros = 0;
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i].getValue() == 8) {
                alert('You win!');
                document.removeEventListener('keyup', this.clickControl.bind(this));
            }
            if (zeros === 0) {
                resultDisplay.innerHTML = 'You lose!';
                document.removeEventListener('keyup', this.clickControl.bind(this));
            }
        }
    }
}

const gameStart = new GameManager();
gameStart.init();
