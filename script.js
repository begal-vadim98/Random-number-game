'use strict'

const guessNumber = function () {

  // Генерируем случайное число
  const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //  Записываем результат в переменную в указанном интервале
  const resultGetRandomInit = getRandomInt(1, 100);

  // Основная частья
  const baseGame = function (attempts) {

    // Уменьшаем колличество попыток
    attempts--

    // спрашиваем пользователя число
    const questionUser = function () {

      let userNumber = prompt("Угадай число от 1 до 100");

      return userNumber;
    }
    
    // Записываем результат в перемннную
    const resultFuncQuestionUser = questionUser();

    // Уведомляем пользователя о результате и производим дальнейшие действия
    const responseOutput = function () {

      switch (true) {
        // В случае окончания попыток
        case attempts === 0:
          let resultAnswer = confirm("Попытки закончились, хотите сыграть еще?");
          switch (resultAnswer) {
            
            case false:
              alert("Игра окончена");
              break;

            case true:
              guessNumber();
              break;

          }
          break;

         // Число было угаданно
        case parseFloat(resultFuncQuestionUser) === resultGetRandomInit:
          let answer = confirm("Поздравляю, Вы угадали!!!, Хотели бы поиграть еще??");

          switch (answer) {

            case false:
              alert("Игра окончена");
              break;

            case true:
              guessNumber();
              break;

          }

          break;
        
        // Пользователь нажал отмена
        case !resultFuncQuestionUser:
          alert("Это ваше прощальное сообщение мы выключаемся");
          break;
        
        // Введенно не число
        case !parseFloat(resultFuncQuestionUser):
          alert("Введи число");
          // Возвращаем колличество попыток на одну
          baseGame(attempts + 1);
          break;

        case resultFuncQuestionUser > resultGetRandomInit:
          alert(`Загаданное число меньше осталось попыток ${attempts}`);
          baseGame(attempts);
          break;

        case resultFuncQuestionUser < resultGetRandomInit:
          alert(`Загаданное число больше осталось попыток ${attempts}`);
          baseGame(attempts);
          break;
      }

    }

    responseOutput();

  }
  baseGame(10);
}

guessNumber();