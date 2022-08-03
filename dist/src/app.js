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
var rootDiv = document.getElementById("root");
var num1 = [10, 20, 30];
var num2 = [30, 20, 10];
// num1.forEach((number)=>{
//     num2.forEach((num2)=>{
//         console.log(num2);
//         if(num2===number){
//             console.log("element found");
//         }
//     })
// })
quiz1.mount(rootDiv);
//# sourceMappingURL=app.js.map