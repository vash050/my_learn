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

