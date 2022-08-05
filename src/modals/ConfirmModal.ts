import { generateUniqueId } from "../../utils/generateUniqueId.js";

generateUniqueId
class ConfirmModal {
    id: string;
    isConfirmed: boolean;
    isCanceled: boolean;
    isDisplayed: boolean;
    constructor() {
        this.id = generateUniqueId({ prefix: "modal" })
        this.isConfirmed = false;
        this.isCanceled = false;
        this.isDisplayed = false;

    }
    render() {
        console.log("in confirm Modal render");

        const modalDivContainer = document.createElement("div");
        const modalDiv = document.createElement("div")
        const modalHeading = document.createElement("h3");
        const okButton = document.createElement("button");
        const cancelButton = document.createElement("button");

        // Assigning id
        modalDivContainer.id = this.id;
        modalDiv.id = `${this.id}-content`
        modalHeading.id = `${this.id}-heading`;
        okButton.id = `${this.id}-okBtn`;
        cancelButton.id = `${this.id}-cancelBtn`;

        // Innter text
        modalHeading.innerText = "Do you wish to submit quiz?";
        okButton.innerText = "Ok";
        cancelButton.innerText = "Cancel";

        modalDivContainer.classList.add("modalContainer")
        modalDiv.classList.add("modal")
        modalDivContainer.style.visibility = "visible";


        // appending child

        modalDiv.appendChild(modalHeading)
        modalDiv.appendChild(okButton)
        modalDiv.appendChild(cancelButton)
        modalDivContainer.appendChild(modalDiv)


        okButton.onclick  =  this.returnResponse.bind(this);
        console.log("this.isCOnfirmed", this.isConfirmed);
        
        
        cancelButton.onclick = this.setVisibility.bind(this);
        // cancelButton.onclick = this.returnResponse(this.isCanceled)!;
        return modalDivContainer
    }
    mount(el: HTMLElement) {

        console.log("in confirm modal mount");
        console.log("this", this);
       
        // return new Promise((reject,resolve) => {
        //     if(this.isConfirmed){
        //         console.log("In mount resolve",this.isDisplayed);
                
        //         (true);
        //     }
        //     else if(!this.isConfirmed){
                el.appendChild(this.render());
        //         resolve(false);
        //     }
        // })
        
        this.isDisplayed = true;
        // event?.preventDefault()

    }

    returnResponse() {
        this.setVisibility()
        console.log("Response:", !this.isConfirmed);
       
        // return  !this.isConfirmed;
    }
    setVisibility() {

        const modalContainer = document.getElementById(`${this.id}`)!
        // console.log("Modal container visibility before hidden",modalContainer.style.visibility);
        // console.log("Modal Container",modalContainer);
        // console.log("Modal container id:",modalContainer.id);
        // console.log("inside setVisibility and is Displayed is :", this.isDisplayed);

        modalContainer.style.visibility = "hidden"
        console.log("Visibility :", modalContainer.style.visibility);
        this.isDisplayed = false;

        // event?.preventDefault()
    }

}

// const confirmModal : ConfirmModal = new ConfirmModal();
export default ConfirmModal;