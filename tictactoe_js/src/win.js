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