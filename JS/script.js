import quizes from './DATABASE/quizes.js';
import Quiz from './DATABASE/Quiz.js';




let initialScore = 0;
let QuizesLength = 10;
let correctAnswer = '0';


let testType = document.getElementById('test-title__content');
testType.textContent = '';

let currentQuiz = document.getElementById('test__questions-answerd');
currentQuiz.textContent = '';

let maxQuiz = document.getElementById('test__max-questions');
maxQuiz.textContent = '';


let userScore =  document.getElementById('user__score');
userScore.textContent = '';


// const testContainer = document.querySelector('.test-options__container');

// let testOptions = document.createElement('div');
// testOptions.className = 'test-option__container';
// testOptions.textContent = '';

// let testAnswers = document.createElement('h1');
// testAnswers.className = 'test-answer__content';
// testAnswers.textContent = '';








// const tropicalFruits = fruits.filter( (tropicalFruit) => tropicalFruit === 'apple');
// console.log(tropicalFruits)



















// function checkInput() {
//     var selectedOption = document.querySelector('input[name="options"]:checked');
    
//     if (selectedOption && selectedOption.value === "2") {
//         right();
//     } else {
//         wrong();
//     }
// }



