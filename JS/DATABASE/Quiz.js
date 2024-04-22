export default class Quiz{
    type;
    question;
    rightAnswer;
    answers;
    constructor(type, question, answers, rightAnswer) {
        this.type = type;
        this.question = question;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
    }
    getType() { return this.type; }

}


const quiz1 = new Quiz("math", "1+1 = ",[3,5,4], 2);
const quiz2 = new Quiz("math", "6/3 = ", [1,5,3], 2);
const quizzes = [quiz1, quiz2];
const TestLength = quizzes.length;

console.log(quiz);