import { generateUniqueId } from "../../utils/generateUniqueId.js";

class ResultModal {
    id: string;
    resultScore: number;
    isCanceled: boolean;
    isDisplayed: boolean;
    constructor(resultScore: number) {
        this.id = generateUniqueId({ prefix: "modal" });
        this.resultScore = resultScore;
        this.isCanceled = false;
        this.isDisplayed = false;

    }
    render() {
        const modalDivContainer = document.createElement("div");
        const modalDiv = document.createElement("div")
        const modalHeading = document.createElement("h3");
        const scoreDisplay = document.createElement("h3")
        const cancelButton = document.createElement("button");

        // Assigning id
        modalDivContainer.id = this.id;
        modalDiv.id = `${this.id}-content`
        modalHeading.id = `${this.id}-heading`;
        scoreDisplay.id =`${this.id}-score`
        cancelButton.id = `${this.id}-cancelBtn`;

        // Innter text
        modalHeading.innerText = "Thank you!?";
        scoreDisplay.innerText =`Youre score : ${this.resultScore}`
        cancelButton.innerText = "Cancel";

        modalDivContainer.classList.add("modalContainer")
        modalDiv.classList.add("modal")


        // appending child

        modalDiv.appendChild(modalHeading)
        modalDiv.appendChild(scoreDisplay)
        modalDiv.appendChild(cancelButton)
        modalDivContainer.appendChild(modalDiv)

        cancelButton.onclick = this.setVisibility.bind(this);
        // cancelButton.onclick = this.returnResponse(this.isCanceled)!;
        return modalDivContainer
    }

    setVisibility(){
        this.isCanceled = true;
        const modalContainer = document.getElementById(this.id)! ;
        modalContainer.style.visibility = "hidden" ;
        this.isDisplayed = true;
        window.location.reload()
    }
    mount(el: HTMLElement) {
        el.appendChild(this.render());
        this.isDisplayed = true;
       
    }
}


export default ResultModal;