#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (someNumber) => someNumber % 2 === 0;

const game = () => {
  let answerCount = 0;
  let isGame = true;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (isGame) {
    const number = Math.round(Math.random() * 10);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (answerCount < 2) {
        answerCount += 1;
      } else {
        console.log(`Congratulations, ${name}!`);
        isGame = false;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      isGame = false;
    }
  }
};

game();
