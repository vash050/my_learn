'use strict'
let game = {
        /** 
         * функция вызывает проверку статуса игры
         * , получает поле на котором происходит клик
         * вызывает функцию написания символа и функцию проверки на выигрыш
         * 
         */
        getCellWithSymbol() {

            let cellAll = document.querySelectorAll('td');
            for (let i = 0; i < cellAll.length; i++) {
                cellAll[i].addEventListener('click', function (event) {
                        if (getVerifyStatus()) {
                            game.renderSymbol(event);
                            win.checkWhoWon();
                        };
                });
            }
            return;
        },

    
    /**
     * Функция получает координа активной клетки 
     * вызывает проверку  заполнения клетки
     * вызывает функции занесения нужного символа в массив
     * и вывода в таблицу
     * 
     * @param {*} event 
     */
    renderSymbol(event) {
        let dataX = +event.target.dataset.x;
        let dataY = +event.target.dataset.y;

        if (this.isCellEmpty(dataX, dataY)) {
            this.addInArray(dataX, dataY);
            this.rederInCell(event);
        }
    },
    /**
     * функция добавляет символ в массив
     * @param {} dataX 
     * @param {*} dataY 
     */
    addInArray(dataX, dataY) {
        let symbolInArray = this.selectionSуmbol();
        data.arrayValue[dataX][dataY] = symbolInArray;
    },
    /**
     * функция проверяет пустая ли клетка поля
     * @param {} dataX 
     * @param {*} dataY 
     */
    isCellEmpty(dataX, dataY) {
        return data.arrayValue[dataX][dataY] === '';
    },
    /**
     * функция выводит нужный символ в клетку игрового поля
     * @param {} event 
     */
    rederInCell(event) {
        let gameCell = document.querySelectorAll('td');
        event.target.innerText = `${data.symbol}`;

    },
    /**
     * функция выбирает нужный символ
     */
    selectionSуmbol() {
        if (data.symbol === "O" || data.symbol === "") {
            data.symbol = "X";
            return data.symbol;
        } else {
            data.symbol = "O";
            return data.symbol;
        };

    },




};
'use strict'

class Board {
    constructor() {
        this.table = document.querySelector('.game');
    }




    /**
     * функция создает игровое поле 3 * 3
     * в виде строки
     * @returns{String}
     */
    renderGameBoard() {
        let cell = '';
        for (let i = 0; i < 3; i++) {
            cell += "<tr>";
            for (let j = 0; j < 3; j++) {
                cell += `<td data-x="${i}" data-y="${j}" ></td>`;
            }
            cell += "</tr>";
        }
        this.addBoard(cell);
    }

   

    /**
     * функция добавляет строку в таблицу
     * @param {*} cell 
     */
    addBoard(cell) {
        this.table.insertAdjacentHTML("afterBegin", cell);
    }

    


}


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
/**
 * функция вызывает функции очистки доски
 * и массива, а также при необходимости меняет 
 * статус игры
 */
  function resetGame() { 
    let button = document.querySelector('.reset');
     button.addEventListener('click',function(){
        clearGameBoard();
        data.clearArray();
        if (data.status == "nogame") {
        win.checkStatus();
    };
     });
     return;
};


/**
 * функция очищяет доску
 */
function clearGameBoard() {
    let tdAll = document.querySelectorAll('td');
    tdAll.forEach(function(td) {
        td.innerText = '';
    });
    return;
};
function getVerifyStatus() {
  return data.status == "game";
};
let win = {
    /**
     * функция вызывает проверку выигрышной ситуации на поле
     * стфтус игры и выводит кто победил
     */
    checkWhoWon() {
        if (this.getVerifyWin()) {
            this.checkStatus();
            alert(`Победили ${data.symbol}`);
            return;
        };
        return;
    },
/**
 * функция вызывает проверку возможных вариантов  выигрыша 
 */
    getVerifyWin() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
                this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
                this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) || 

                this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
                this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
                this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||
                
                this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
                this.isLineWon({ x: 2, y: 0 }, { x: 1, y: 1}, { x: 0, y: 2 }); 
    },
/**
 * функция проверяет есть ли выигрыш
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */
    isLineWon(a, b, c) {
        let value = data.arrayValue[a.y][a.x] + data.arrayValue[b.y][b.x] + data.arrayValue[c.y][c.x];
        return value === "XXX" || value === "OOO";
    },

    /**
     * функция проверяет и меняет статус игры
     */
    checkStatus() {
        if (data.status == "game") {
            data.status = "nogame";
        } else {
            data.status = "game";
        };

    },

};
//# sourceMappingURL=maps/app.js.map
