var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Option from "../src/components/Option.js";
import Question from "../src/components/Question.js";
import Quiz from "../src/components/Quiz.js";
import { generateUniqueId } from "./generateUniqueId.js";
function assignAllId() {
    var quizObject;
    var questions = [];
    var url = "https://abhijitturate.github.io/QuizApp/data/basicQuizData.json";
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var quiz = data;
        var quizQuestions = data.questions;
        var quizOptions = [];
        data.id = generateUniqueId({ prefix: "quiz" });
        quizQuestions.forEach(function (question) {
            var questionText = question.questionText;
            var points = question.points;
            var options = generateOptions(question.options);
            // generateCorrectOptions(options);
            // console.log( options.filter(option => option.isCorrect));
            var correctOptions = options.filter(function (option) { return option.isCorrect; });
            question.id = generateUniqueId({ prefix: "ques" });
            question = Object.assign(new Question({ questionText: questionText, points: points, correctOptions: correctOptions, options: options }), question);
            questions.push(question);
        });
        data.questions = __spreadArray([], questions, true);
        var quizTitle = data.quizTitle;
        var defaultPoints = data.defaultPoints;
        console.log("received data", data);
        quizObject = Object.assign(new Quiz({ quizTitle: quizTitle, questions: questions, defaultPoints: defaultPoints }), data);
        console.log("Quiz object generated from Object.assign:", quizObject);
    });
}
function generateOptions(options) {
    var Options = [];
    var recievedOptions = options;
    console.log("recieved options:", Options);
    recievedOptions.forEach(function (option) {
        var optionText = option.optionText;
        var isCorrect = option.isCorrect;
        option.id = generateUniqueId({ prefix: "option" });
        var optionObject = Object.assign(new Option({ optionText: optionText, isCorrect: isCorrect }), option);
        Options.push(optionObject);
    });
    return Options;
    // return []
}
assignAllId();
// const op1 = new Option({optionText: "2", isCorrect: true});
// const op2 = new Option({optionText: "4", isCorrect: false});
// const op3 = new Option({optionText: "3", isCorrect: false});
// const op4 = new Option({optionText: "5", isCorrect: false});
// const question1 = new Question({questionText : "what is 1+1 ?",points : 1 , correctOptions :[op1],options : [op1,op2,op3,op4]});
// const quiz2op1 = new Option({optionText: "Java Style", isCorrect: false});
// const quiz2op2 = new Option({optionText: "json script", isCorrect: false});
// const quiz2op3 = new Option({optionText: "javascript", isCorrect: true});
// const quiz2op4 = new Option({optionText: "javastorm", isCorrect: true});
// const question2 = new Question({questionText : "what is full form of JS ?",points : 2 , correctOptions :[quiz2op3,quiz2op4],options : [quiz2op1,quiz2op2,quiz2op3,quiz2op4]});
// const quiz1 = new Quiz({quizTitle:"quiz app",defaultPoints :10 , questions : [question1,question2]})
//  console.log("manually created quiz",quiz1);
//# sourceMappingURL=assignAllId.js.map