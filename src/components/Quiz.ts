import { generateUniqueId } from "../../utils/generateUniqueId.js";
import Question from "./Question.js";

type quizConfig ={
   
    defaultPoints : number ; // User defined
    questions : Question[];
    quizTitle : string;

}

class Quiz {
    id: string;
    totalPoints : number;
    totalScore : number;
    isSubmitted : boolean = false;
    defaultPoints : number ; // User defined
    questions : Question[];
    quizTitle : string;

    constructor({quizTitle, questions, defaultPoints } : quizConfig)
    {
        this.id = generateUniqueId({prefix : "quiz"})
        this.quizTitle = quizTitle;
        this.questions = [...questions];
        this.totalScore= this.questions.reduce((initialValue, question) =>{
            console.log("initial value",initialValue , question);
            return 10;
        },0);
        this.defaultPoints = defaultPoints;
        // 1 run a function on all question and sum in constructor
        //  2 run a separate 
        this.totalPoints = 0
    }

    render()
    {
        const quizContainer = document.createElement("div")
        const quizTitle = document.createElement("h1");
        const quizForm = document.createElement("form")
        const submitbutton = document.createElement("button")
        // add id
        quizContainer.id = this.id;
        quizTitle.id = `${this.id}-quizTitle`
        quizForm.id = `${this.id}-quizForm`
        submitbutton.id = `${this.id}-submitButton`

        // this.questions.forEach()
        // add clasees
        quizContainer.classList.add("quizContainet")
        quizTitle.classList.add("quizTitle")
        quizForm.classList.add("quizForm")
        submitbutton.classList.add("submitButton")

        quizTitle.innerText = this.quizTitle;
        submitbutton.innerText = "Submit Quiz"


        // Appending childs
        this.questions.forEach((question)=>{
            question.mount(quizForm)
        })
        quizForm.appendChild(submitbutton)


        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(quizForm)
        // attach question container
        return quizContainer
        
    }
    mount(el: HTMLElement){
        console.log("in quiz mount");
        
        el.appendChild(this.render())
    }
    submitQuiz()
    {

    }
    updateScore()
    {

    }

}

export default Quiz