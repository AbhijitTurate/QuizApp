import Option from "./components/Option.js";
import Question from "./components/Question.js";
import Quiz from "./components/Quiz.js"

const op1 = new Option({optionText: "2", isCorrect: true});
const op2 = new Option({optionText: "4", isCorrect: false});
const op3 = new Option({optionText: "3", isCorrect: false});
const op4 = new Option({optionText: "5", isCorrect: false});

const question1 = new Question({questionText : "what is 1+1 ?",points : 1 , correctOptions :[op1],options : [op1,op2,op3,op4]});

const quiz2op1 = new Option({optionText: "Java Style", isCorrect: false});
const quiz2op2 = new Option({optionText: "json script", isCorrect: false});
const quiz2op3 = new Option({optionText: "javascript", isCorrect: true});
const quiz2op4 = new Option({optionText: "javastorm", isCorrect: true});


const question2 = new Question({questionText : "what is full form of JS ?",points : 2 , correctOptions :[quiz2op3,quiz2op4],options : [quiz2op1,quiz2op2,quiz2op3,quiz2op4]});
const quiz1 = new Quiz({quizTitle:"quiz app",defaultPoints :10 , questions : [question1,question2]})

 

const url = "https://abhijitturate.github.io/QuizApp/data/example.json"
let quiz2 : Quiz 

let question :Question
fetch(url)
.then((response) =>  response.json())
.then((data) => {

    const quizTitle = data.quizTitle;
    let jsonquestions: Question[] = data.questions;
    const defaultPoints = data.defaultPoints;
    let questionsArray : Question[] = []

    jsonquestions.forEach(element => {
        let questionText = element.questionText;
        let points = element.points;
        let options = element.options;
        let correctOptions = element.correctOptions;
        question = Object.assign(new Question({questionText, points ,options ,correctOptions}) , element)
        console.log("Question generated from json",question);
        questionsArray.push(question)
      
    });
 
   
    let questions = questionsArray

    data.questions= [...questions]
  
    
    quiz2 = Object.assign(new Quiz({quizTitle,questions,defaultPoints}), data)
    console.log("Quiz Object",quiz2);
    const rootDiv = document.getElementById("root")!
    quiz2.mount(rootDiv)

})
// console.log("Quiz Structure:",JSON.stringify(quiz1));

// console.log("JSON",JSON.parse(JSON.stringify(quiz1)));

const rootDiv = document.getElementById("root")!
// quiz1.mount(rootDiv)




