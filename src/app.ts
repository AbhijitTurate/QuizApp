import Option from "./components/Option.js";
import Question from "./components/Question.js";
import Quiz from "./components/Quiz.js"
const op1 = new Option({optionText: "2", isCorrect: true});
const op2 = new Option({optionText: "4", isCorrect: false});
const op3 = new Option({optionText: "3", isCorrect: false});
const op4 = new Option({optionText: "5", isCorrect: false});


const question1 = new Question({questionText : "what is 1+1 ?",points : 1 , correctOptions :[op1],options : [op1,op2,op3,op4]});

const quiz1 = new Quiz({quizTitle:"quiz app",defaultPoints :10 , questions : [question1]})

const quizForm = document.getElementById("quizAppForm")


const rootDiv = document.getElementById("root")!

quiz1.mount(rootDiv)

