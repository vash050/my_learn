'use strict'

window.addEventListener('load', function () {
    const gameBoard = new Board();
    gameBoard.renderGameBoard();
    game.getCellWithSymbol();
    resetGame();
   
});



let data = {

    status: "game",
    symbol: '',

    arrayValue: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
/**
 * функция очищяет массив
 */
    clearArray() {
        for(let value of this.arrayValue) {
            value.splice(0, 3, '', '', '');
        }
    }
}