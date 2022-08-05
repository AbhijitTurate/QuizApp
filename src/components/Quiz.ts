import { generateUniqueId } from "../../utils/generateUniqueId.js";
import ConfirmModal from "../modals/ConfirmModal.js";
import Modal from "../modals/Modal.js";
import ResultModal from "../modals/ResultModal.js";
import Question from "./Question.js";


type quizConfig = {

    defaultPoints: number; // User defined
    questions: Question[];
    quizTitle: string;

}

class Quiz {
    id: string;
    totalPoints: number;
    finalScore: number;
    isSubmitted: boolean = false;
    defaultPoints: number; // User defined
    questions: Question[];
    quizTitle: string;
    confirmModal!: ConfirmModal;
    resultModal: ResultModal;
    modal!: Modal
    constructor({ quizTitle, questions, defaultPoints }: quizConfig) {
        this.id = generateUniqueId({ prefix: "quiz" })
        this.quizTitle = quizTitle;
        this.questions = [...questions];
        this.totalPoints = this.questions.reduce((initialValue, question) => {
            console.log("initial value", initialValue, question);
            return initialValue + this.totalPoints;
        }, 0);
        this.defaultPoints = defaultPoints;
        this.confirmModal = new ConfirmModal();
        // 1 run a function on all question and sum in constructor
        //  2 run a separate 
        this.finalScore = 0;
        // this.modal = Modal
        this.resultModal = new ResultModal(this.finalScore)
    }

    render() {
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

        // attaching event listener
        quizForm.onsubmit = this.submitQuiz.bind(this)

        // Appending childs
        this.questions.forEach((question) => {
            question.mount(quizForm)
        })
        quizForm.appendChild(submitbutton)


        quizContainer.appendChild(quizTitle)
        quizContainer.appendChild(quizForm)


        return quizContainer

    }
    mount(el: HTMLElement) {
        console.log("in quiz mount");

        el.appendChild(this.render())

    }

    submitQuiz(event: SubmitEvent) {
        event?.preventDefault()
        const confirmModal = new ConfirmModal();
        const rootDiv = document.getElementById("root")!
       
        confirmModal.mount(rootDiv)

        
        if(confirmModal.isConfirmed){
            console.log("isConfirmed");
            
        }
        else{
            console.log("NotConfirmed");
        }
        

        // new Promise((reject,resolve) =>{
        //     resolve()
        
        //     // reject("Modal not found")
        // })
        // .then(() => {
        //     console.log("modal is mounted");
            
        // })
        // console.log("after mounting");
        

        //    this.modal = new Modal("confirm")
        //     console.log("after initializing Modal object");

        // event.preventDefault()
        // if (confirm("do you wish to submit quiz?")) {

        //     console.log("returned true",this.modal);

        //     this.isSubmitted=true;
        //     event.preventDefault()
        //     console.log("Quiz is submitted");

        //     this.questions.forEach((question) => {
        //         question.checkCorrectAnswers()
        //     })
        //     this.updateScore();
        //     // 
        //     // this.modal("confirm")
        //     this.modal= new Modal("result",this.finalScore)

        // //    this.resultModal = new ResultModal(this.finalScore);
        // //     this.resultModal.mount()
        // }
    }
    updateScore() {
        this.questions.forEach((question) => {
            if (question.isAnsweredCorrectly) {
                this.finalScore = this.finalScore + question.points
            }

        })
        console.log("Total score:", this.finalScore);
    }

}

export default Quiz