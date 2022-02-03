'use strict'

const guessNumber = function (attempts) {

  // Генерируем случайное число
  const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
//  Записываем результат в переменную в указанном интервале

  const resultGetRandomInit = getRandomInt(1, 100);

  // Основная частья
  const baseGame = function () {
    attempts--
    console.log(attempts)

    
    // спрашиваем пользователя
    const questionUser = function () {

      let userNumber =  prompt("Угадай число от 1 до 100");

      return userNumber;
    }

    const resultFuncQuestionUser = questionUser();


    console.log(resultGetRandomInit);

    // Попытки
    // const attemptsFunc = function () {

    //   switch (true) {
    //     case attempts > 0: 
    //     baseGame();
    //     break

    //    case attempts = 0: 
    //     baseGame().stop();
    //     break
    //   }
      
    // }
    
    // attemptsFunc();
    // Уведомляем пользователя о результате
    const responseOutput = function () {

      switch (true) {

      

        case !resultFuncQuestionUser:
            alert("Отмена");
            break

        case !parseFloat(resultFuncQuestionUser):
          alert("Введи число");
          baseGame();
          break



        case resultFuncQuestionUser > resultGetRandomInit:
          alert("Загаданное число меньше");
          baseGame();
          break

        case resultFuncQuestionUser < resultGetRandomInit:
          alert("Загаданное число больше"); 
          baseGame();
          break

        case parseFloat(resultFuncQuestionUser) === resultGetRandomInit:
          alert("Поздравляю, Вы угадали!!!");
          break
         
          // case attempts > 0: 
          // baseGame();
          // break
  
         case attempts === 0: 
         
          alert("все")
          return;
          break

      }

    }

    responseOutput(); 

   
  }

  baseGame();
}

guessNumber(10);