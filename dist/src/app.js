var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var quizTitle = data.quizTitle;
    var jsonquestions = data.questions;
    var defaultPoints = data.defaultPoints;
    var questionsArray = [];
    jsonquestions.forEach(function (element) {
        var questionText = element.questionText;
        var points = element.points;
        var options = element.options;
        var correctOptions = element.correctOptions;
        question = Object.assign(new Question({ questionText: questionText, points: points, options: options, correctOptions: correctOptions }), element);
        console.log("Question generated from json", question);
        questionsArray.push(question);
    });
    var questions = questionsArray;
    data.questions = __spreadArray([], questions, true);
    quiz2 = Object.assign(new Quiz({ quizTitle: quizTitle, questions: questions, defaultPoints: defaultPoints }), data);
    console.log("Quiz Object", quiz2);
    var rootDiv = document.getElementById("root");
    quiz2.mount(rootDiv);
});
// console.log("Quiz Structure:",JSON.stringify(quiz1));
// console.log("JSON",JSON.parse(JSON.stringify(quiz1)));
var rootDiv = document.getElementById("root");
// quiz1.mount(rootDiv)
//# sourceMappingURL=app.js.map