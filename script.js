'use strict'

const funcRound = function (one, two) {
  if (one === true || two === true) funcRound();

  // Генерируем случайное число
  const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //  Записываем результат в переменную в указанном интервале
  const resultGetRandomInit = getRandomInt(1, 100);
  console.log(resultGetRandomInit);


  const guessNumber = function () {


    // Функция замыкания
    const closureFunc = function () {
      let attempts = 10;

      // if(attempts === 0) 
      // Основная частья
      const baseGame = function () {

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

            // Число было угаданно
            case parseFloat(resultFuncQuestionUser) === resultGetRandomInit:
              one = confirm("Поздравляю, Вы угадали!!!, Хотели бы поиграть еще??");
              break;

              // В случае окончания попыток
            case attempts === 0:
              two = confirm("Попытки закончились, хотите сыграть еще?");

              break;


              // Пользователь нажал отмена
            case !resultFuncQuestionUser:
              alert("Это ваше прощальное сообщение мы выключаемся");
              break;

              // Введенно не число
            case !parseFloat(resultFuncQuestionUser):
              alert("Введи число");
              // Возвращаем колличество попыток на одну
              attempts++
              baseGame();
              break;

            case resultFuncQuestionUser > resultGetRandomInit:
              alert(`Загаданное число меньше осталось попыток ${attempts}`);
              baseGame();
              break;

            case resultFuncQuestionUser < resultGetRandomInit:
              alert(`Загаданное число больше осталось попыток ${attempts}`);
              baseGame();
              break;
          }

        }

        responseOutput();


      }
      baseGame();
    }
    closureFunc();

  }

  guessNumber();


}

funcRound();