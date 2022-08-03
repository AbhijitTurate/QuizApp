var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { generateUniqueId } from "../../utils/generateUniqueId.js";
var Quiz = /** @class */ (function () {
    function Quiz(_a) {
        var quizTitle = _a.quizTitle, questions = _a.questions, defaultPoints = _a.defaultPoints;
        var _this = this;
        this.isSubmitted = false;
        this.id = generateUniqueId({ prefix: "quiz" });
        this.quizTitle = quizTitle;
        this.questions = __spreadArray([], questions, true);
        this.totalPoints = this.questions.reduce(function (initialValue, question) {
            console.log("initial value", initialValue, question);
            return initialValue + _this.totalPoints;
        }, 0);
        this.defaultPoints = defaultPoints;
        // 1 run a function on all question and sum in constructor
        //  2 run a separate 
        this.finalScore = 0;
    }
    Quiz.prototype.render = function () {
        var quizContainer = document.createElement("div");
        var quizTitle = document.createElement("h1");
        var quizForm = document.createElement("form");
        var submitbutton = document.createElement("button");
        // add id
        quizContainer.id = this.id;
        quizTitle.id = "".concat(this.id, "-quizTitle");
        quizForm.id = "".concat(this.id, "-quizForm");
        submitbutton.id = "".concat(this.id, "-submitButton");
        // this.questions.forEach()
        // add clasees
        quizContainer.classList.add("quizContainet");
        quizTitle.classList.add("quizTitle");
        quizForm.classList.add("quizForm");
        submitbutton.classList.add("submitButton");
        quizTitle.innerText = this.quizTitle;
        submitbutton.innerText = "Submit Quiz";
        // attaching event listener
        quizForm.onsubmit = this.submitQuiz.bind(this);
        // Appending childs
        this.questions.forEach(function (question) {
            question.mount(quizForm);
        });
        quizForm.appendChild(submitbutton);
        quizContainer.appendChild(quizTitle);
        quizContainer.appendChild(quizForm);
        return quizContainer;
    };
    Quiz.prototype.mount = function (el) {
        console.log("in quiz mount");
        el.appendChild(this.render());
    };
    Quiz.prototype.submitQuiz = function (event) {
        if (confirm("do you wish to submit quiz?")) {
            this.isSubmitted = true;
            event.preventDefault();
            console.log("Quiz is submitted");
            this.questions.forEach(function (question) {
                question.checkCorrectAnswers();
            });
            this.updateScore();
        }
    };
    Quiz.prototype.updateScore = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question.isAnsweredCorrectly) {
                _this.finalScore = _this.finalScore + question.points;
            }
        });
        console.log("Total score:", this.finalScore);
    };
    return Quiz;
}());
export default Quiz;
//# sourceMappingURL=Quiz.js.map