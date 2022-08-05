import Option from "./components/Option.js";
import Question from "./components/Question.js";
import Quiz from "./components/Quiz.js";
var op1 = new Option({ optionText: "2", isCorrect: true });
var op2 = new Option({ optionText: "4", isCorrect: false });
var op3 = new Option({ optionText: "3", isCorrect: false });
var op4 = new Option({ optionText: "5", isCorrect: false });
var question1 = new Question({ questionText: "what is 1+1 ?", points: 1, correctOptions: [op1], options: [op1, op2, op3, op4] });
var quiz2op1 = new Option({ optionText: "Java Style", isCorrect: false });
var quiz2op2 = new Option({ optionText: "json script", isCorrect: false });
var quiz2op3 = new Option({ optionText: "javascript", isCorrect: true });
var quiz2op4 = new Option({ optionText: "javastorm", isCorrect: true });
var question2 = new Question({ questionText: "what is full form of JS ?", points: 2, correctOptions: [quiz2op3, quiz2op4], options: [quiz2op1, quiz2op2, quiz2op3, quiz2op4] });
var quiz1 = new Quiz({ quizTitle: "quiz app", defaultPoints: 10, questions: [question1, question2] });
var url = "https://abhijitturate.github.io/QuizApp/data/example.json";
var quiz2;
var question;
// fetch(url)
// .then((response) =>  response.json())
// .then((data) => {
//     const quizTitle = data.quizTitle;
//     let jsonquestions: Question[] = data.questions;
//     const defaultPoints = data.defaultPoints;
//     let questionsArray : Question[] = []
//     jsonquestions.forEach(element => {
//         let questionText = element.questionText;
//         let points = element.points;
//         let options = element.options;
//         let correctOptions = element.correctOptions;
//         question = Object.assign(new Question({questionText, points ,options ,correctOptions}) , element)
//         console.log("Question generated from json",question);
//         questionsArray.push(question)
//     });
//     let questions = questionsArray
//     data.questions= [...questions]
//     quiz2 = Object.assign(new Quiz({quizTitle,questions,defaultPoints}), data)
//     console.log("Quiz Object",quiz2);
//     const rootDiv = document.getElementById("root")!
//     // quiz2.mount(rootDiv)
// })
// console.log("Quiz Structure:",JSON.stringify(quiz1));
// console.log("JSON",JSON.parse(JSON.stringify(quiz1)));
var rootDiv = document.getElementById("root");
quiz1.mount(rootDiv);
//# sourceMappingURL=app.js.map