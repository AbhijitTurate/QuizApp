import { generateUniqueId } from "../../utils/generateUniqueId.js";
import { includesObject } from "../../utils/includesObject.js";
import Option from "./Option.js";

type QuestionConfig = {

    questionText: string;
    points: number;


    options: Array<Option>
    // options : Option[]

    correctOptions: Option[]
}
class Question {
    id: string;
    questionText: string;
    points: number;
    isAnswered: boolean;
    isAnsweredCorrectly: boolean;
    options: Array<Option>;
    // options : Option[]
    selectedOptions: Option[];
    correctOptions: Option[];
    hasMultpleCorrectOptions: boolean;
    constructor({ questionText, points, correctOptions, options }: QuestionConfig) {
        this.id = generateUniqueId({ prefix: "que" });
        this.questionText = questionText;
        this.points = points;
        this.isAnswered = false;
        this.isAnsweredCorrectly = false;
        this.options = [...options];
        this.selectedOptions = [];
        this.correctOptions = [...correctOptions];
        this.hasMultpleCorrectOptions = this.correctOptions.length > 1 ? true : false
    }
    updateSelectedOptions(event: Event) {

        let userSelectedOption: Option[] = []
        const inputOption = document.querySelectorAll(`[name=${this.id}]`)!
        // console.log("All input elements:",inputOption);
        // console.log("evenyt target:",event.target);
        inputOption.forEach((input) => {

            const inputeField = input as HTMLInputElement
            // console.log(inputeField.checked);
            if (inputeField.checked) {
                userSelectedOption.push(this.options.find((option) => {
                    return option.id === inputeField.id
                })!)
            }

        })


        this.selectedOptions = [...userSelectedOption]
    }
    checkCorrectAnswers() {
        console.log("selected options:",this.selectedOptions);
        
        // let answered= false
        // if has multiple answers
        if (this.selectedOptions.length !== this.correctOptions.length) {
                this.isAnsweredCorrectly= false;
                return;
            }
       this.isAnsweredCorrectly=  this.selectedOptions.every((option) => {
            return includesObject<Option>(this.correctOptions , option,"id")
        })
        // if (this.selectedOptions.length !== this.correctOptions.length) {
        //     this.isAnsweredCorrectly= false;
        //     return;
        // }
        //     this.selectedOptions.forEach((option) => {
        //         try {
        //             this.isAnsweredCorrectly = includesObject<Option>(this.correctOptions, option, "id") as boolean;
        //         }
        //         catch (err) {
        //             console.log("Error is thrown");
        //         }     
        //     })
        
       
        console.log("isAnsweredCorrectly :", this.isAnsweredCorrectly);
        this.updateIsAnswered()
    }
 

    updateIsAnswered() {
        if(this.selectedOptions.length)
        {
            this.isAnswered = true
        }
        else{
            this.isAnswered = false
        }
     }

    render() {
        const questionContainer = document.createElement("div")
        const questionText = document.createElement("h1")
        const optionContainer = document.createElement("ul")

        // Assigning id
        questionContainer.id = this.id
        questionText.id = `${this.id}-questionText`
        optionContainer.id = `${this.id}-optionContainer`

        // adding classes
        questionContainer.classList.add("questionContainer")
        questionText.classList.add("questiontext")
        optionContainer.classList.add("optionContainer")

        // Setting innertext
        questionText.innerText = this.questionText

        // Appending childs
        questionContainer.appendChild(questionText)
        questionContainer.appendChild(optionContainer)

        this.options.forEach((option) => {
            // creating html elements
            const optionLi = document.createElement("li")
            const optionInput = document.createElement("input")
            const optionLabel = document.createElement("label")

            // add type
            if (this.hasMultpleCorrectOptions) {
                optionInput.type = "checkbox"
            }
            else {
                optionInput.type = "radio";
            }


            // add ID
            optionLi.id = `${option.id}-li`;
            optionInput.id = option.id;
            optionInput.name = this.id;
            optionLabel.htmlFor = option.id;

            // add classes
            optionLi.classList.add("option");
            optionLabel.classList.add("optionLabel")

            optionLabel.innerText = option.optionText

            // Add event listener
            optionInput.onchange = this.updateSelectedOptions.bind(this);

            // append child

            optionLi.appendChild(optionInput)
            optionLi.appendChild(optionLabel)

            optionContainer.appendChild(optionLi)
        })

        return questionContainer
    }
    mount(el: HTMLElement) {
        el.appendChild(this.render())
    }
}
export default Question;







