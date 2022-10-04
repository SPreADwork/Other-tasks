'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessTheNumber(num) {
    let hiddenNumber = +prompt('Угадай число от 1 до 100');
    if (hiddenNumber > num) {
        alert('Загаданное число меньше');
        guessTheNumber();
    } else if (hiddenNumber < num) {
        alert('Загаданное число больше');
        guessTheNumber();
    } else if (!isNumber(hiddenNumber)) {
        alert('Введи число!');
        guessTheNumber();
    } else if (hiddenNumber === 5) {
        alert('You WIN');
        guessTheNumber();
    } else {
        alert('GAME OVER');
        return;
    }
    
}
guessTheNumber(5);