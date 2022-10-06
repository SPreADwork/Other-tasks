'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// function startGame() {
//   let num = Math.ceil(Math.random() * 100);
    
// function guessTheNumber(num) {
//     let hiddenNumber = prompt('Угадай число от 1 до 100');
//     if (hiddenNumber > num) {
//         alert('Загаданное число меньше');
//         guessTheNumber();
//     } else if (hiddenNumber < num) { 
//         alert('Загаданное число больше');
//         guessTheNumber();
//     } else if (!isNumber(hiddenNumber)) {
//         alert('Введи число!');
//         guessTheNumber();
//     } else if (hiddenNumber == num) {
//         alert('You WIN');
//         guessTheNumber();
//      } else // if (hiddenNumber == null) {
//         alert('GAME OVER');
//         return;
//     // }
    
// }
// return guessTheNumber();
// }
// startGame();


function startGame() {
  let num = Math.ceil(Math.random() * 100);
    
function guessTheNumber() {
    let hiddenNumber = prompt('Угадай число от 1 до 100');

    if (hiddenNumber === null) {
        alert('GAME OVER');
        return;
    } 
    if (!isNumber(hiddenNumber)) {
        alert('Введи число!');
        guessTheNumber();
    } else {
        hiddenNumber = +hiddenNumber;
        if (hiddenNumber > 100) {
            alert('Перечитайте правила!!!ДО 100!!!');
            guessTheNumber();
        } else if (hiddenNumber > num) {
            alert('Загаданное число меньше');
            guessTheNumber();
        } else if (hiddenNumber < num) { 
            alert('Загаданное число больше');
            guessTheNumber();
        } else if (hiddenNumber === num) {
            alert('You WIN');
            guessTheNumber();
        } 
    }
}
return guessTheNumber();
}
startGame();
