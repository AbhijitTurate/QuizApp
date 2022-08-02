import { generateUniqueId } from "../../utils/generateUniqueId.js";
import Option from "./Option.js";

type QuestionConfig ={
  
    questionText : string;
    points : number;
    
   
    options : Array<Option>
    // options : Option[]
   
    correctOptions  : Option[]
}
class Question{
    id: string;
    questionText : string;
    points : number;
    isAnswered : boolean;
    isAnsweredCorrectly : boolean;
    options : Array<Option>
    // options : Option[]
    selectedOptions : Option[]
    correctOptions  : Option[]
    constructor({questionText,points,correctOptions,options} : QuestionConfig){
        this.id = generateUniqueId({prefix : "que"});
        this.questionText = questionText;
        this.points = points;
        this.isAnswered = false;
        this.isAnsweredCorrectly =false;
        this.options = [...options];
        this.selectedOptions = [];
        this.correctOptions =[...correctOptions];
    }
    checkCorrectAnswers(){
    }
    trackScore(){}
    updateSelectedOptions()
    {}
    updateIsAnswered()
    {}

    render(){
        const questionContainer = document.createElement("div")
        const questionText = document.createElement("h1")
        const optionContainer = document.createElement("ul")

        // Assigning id
        questionContainer.id = this.id
        questionText.id = `${this.id}-questionText`
        optionContainer.id = `${this.id}-optionContainer`

        // 
        questionContainer.classList.add("questionContainer")
        questionText.classList.add("questiontext")
        optionContainer.classList.add("optionContainer")


        questionText.innerText =this.questionText

        questionContainer.appendChild(questionText)
        questionContainer.appendChild(optionContainer)

        this.options.forEach((option) =>{
            // creating html elements
            const optionLi = document.createElement("li")
            const optionInput = document.createElement("input")
            const optionLabel = document.createElement("label")

            // add type
            optionInput.type = "radio";

            // add ID
            optionLi.id =`${option.id}-li`;
            optionInput.id = option.id;
            optionInput.name = this.id;
            optionLabel.htmlFor= option.id;

            // add classes
            optionLi.classList.add("option");
            optionLabel.classList.add("optionLabel")

            optionLabel.innerText = option.optionText

            // append child

            optionLi.appendChild(optionInput)
            optionLi.appendChild(optionLabel)

            optionContainer.appendChild(optionLi)
        })

        return questionContainer
    }
    mount(el: HTMLElement){
        el.appendChild(this.render())
    }
}
export default Question;







