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