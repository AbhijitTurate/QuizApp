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
import { includesObject } from "../../utils/includesObject.js";
var Question = /** @class */ (function () {
    function Question(_a) {
        var questionText = _a.questionText, points = _a.points, correctOptions = _a.correctOptions, options = _a.options;
        this.id = generateUniqueId({ prefix: "que" });
        this.questionText = questionText;
        this.points = points;
        this.isAnswered = false;
        this.isAnsweredCorrectly = false;
        this.options = __spreadArray([], options, true);
        this.selectedOptions = [];
        this.correctOptions = __spreadArray([], correctOptions, true);
        this.hasMultpleCorrectOptions = this.correctOptions.length > 1 ? true : false;
    }
    Question.prototype.updateSelectedOptions = function (event) {
        var _this = this;
        var userSelectedOption = [];
        var inputOption = document.querySelectorAll("[name=".concat(this.id, "]"));
        // console.log("All input elements:",inputOption);
        // console.log("evenyt target:",event.target);
        inputOption.forEach(function (input) {
            var inputeField = input;
            // console.log(inputeField.checked);
            if (inputeField.checked) {
                userSelectedOption.push(_this.options.find(function (option) {
                    return option.id === inputeField.id;
                }));
            }
        });
        this.selectedOptions = __spreadArray([], userSelectedOption, true);
    };
    Question.prototype.checkCorrectAnswers = function () {
        var _this = this;
        console.log("selected options:", this.selectedOptions);
        // let answered= false
        // if has multiple answers
        if (this.selectedOptions.length !== this.correctOptions.length) {
            this.isAnsweredCorrectly = false;
            return;
        }
        this.isAnsweredCorrectly = this.selectedOptions.every(function (option) {
            return includesObject(_this.correctOptions, option, "id");
        });
        console.log("isAnsweredCorrectly :", this.isAnsweredCorrectly);
        this.updateIsAnswered();
    };
    Question.prototype.updateIsAnswered = function () {
        if (this.selectedOptions.length) {
            this.isAnswered = true;
        }
        else {
            this.isAnswered = false;
        }
    };
    Question.prototype.render = function () {
        var _this = this;
        var questionContainer = document.createElement("div");
        var questionText = document.createElement("h1");
        var optionContainer = document.createElement("ul");
        // Assigning id
        questionContainer.id = this.id;
        questionText.id = "".concat(this.id, "-questionText");
        optionContainer.id = "".concat(this.id, "-optionContainer");
        // adding classes
        questionContainer.classList.add("questionContainer");
        questionText.classList.add("questiontext");
        optionContainer.classList.add("optionContainer");
        // Setting innertext
        questionText.innerText = this.questionText;
        // Appending childs
        questionContainer.appendChild(questionText);
        questionContainer.appendChild(optionContainer);
        this.options.forEach(function (option) {
            // creating html elements
            var optionLi = document.createElement("li");
            var optionInput = document.createElement("input");
            var optionLabel = document.createElement("label");
            // add type
            if (_this.hasMultpleCorrectOptions) {
                optionInput.type = "checkbox";
            }
            else {
                optionInput.type = "radio";
            }
            // add ID
            optionLi.id = "".concat(option.id, "-li");
            optionInput.id = option.id;
            optionInput.name = _this.id;
            optionLabel.htmlFor = option.id;
            // add classes
            optionLi.classList.add("option");
            optionLabel.classList.add("optionLabel");
            optionLabel.innerText = option.optionText;
            // Add event listener
            optionInput.onchange = _this.updateSelectedOptions.bind(_this);
            // append child
            optionLi.appendChild(optionInput);
            optionLi.appendChild(optionLabel);
            optionContainer.appendChild(optionLi);
        });
        return questionContainer;
    };
    Question.prototype.mount = function (el) {
        el.appendChild(this.render());
    };
    return Question;
}());
export default Question;
//# sourceMappingURL=Question.js.map