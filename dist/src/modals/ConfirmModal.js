import { generateUniqueId } from "../../utils/generateUniqueId.js";
generateUniqueId;
var ConfirmModal = /** @class */ (function () {
    function ConfirmModal() {
        this.id = generateUniqueId({ prefix: "modal" });
        this.isConfirmed = false;
        this.isCanceled = false;
        this.isDisplayed = false;
    }
    ConfirmModal.prototype.render = function () {
        console.log("in confirm Modal render");
        var modalDivContainer = document.createElement("div");
        var modalDiv = document.createElement("div");
        var modalHeading = document.createElement("h3");
        var okButton = document.createElement("button");
        var cancelButton = document.createElement("button");
        // Assigning id
        modalDivContainer.id = this.id;
        modalDiv.id = "".concat(this.id, "-content");
        modalHeading.id = "".concat(this.id, "-heading");
        okButton.id = "".concat(this.id, "-okBtn");
        cancelButton.id = "".concat(this.id, "-cancelBtn");
        // Innter text
        modalHeading.innerText = "Do you wish to submit quiz?";
        okButton.innerText = "Ok";
        cancelButton.innerText = "Cancel";
        modalDivContainer.classList.add("modalContainer");
        modalDiv.classList.add("modal");
        modalDivContainer.style.visibility = "visible";
        // appending child
        modalDiv.appendChild(modalHeading);
        modalDiv.appendChild(okButton);
        modalDiv.appendChild(cancelButton);
        modalDivContainer.appendChild(modalDiv);
        okButton.onclick = this.returnResponse.bind(this);
        console.log("this.isCOnfirmed", this.isConfirmed);
        cancelButton.onclick = this.setVisibility.bind(this);
        // cancelButton.onclick = this.returnResponse(this.isCanceled)!;
        return modalDivContainer;
    };
    ConfirmModal.prototype.mount = function (el) {
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
    };
    ConfirmModal.prototype.returnResponse = function () {
        this.setVisibility();
        console.log("Response:", !this.isConfirmed);
        // return  !this.isConfirmed;
    };
    ConfirmModal.prototype.setVisibility = function () {
        var modalContainer = document.getElementById("".concat(this.id));
        // console.log("Modal container visibility before hidden",modalContainer.style.visibility);
        // console.log("Modal Container",modalContainer);
        // console.log("Modal container id:",modalContainer.id);
        // console.log("inside setVisibility and is Displayed is :", this.isDisplayed);
        modalContainer.style.visibility = "hidden";
        console.log("Visibility :", modalContainer.style.visibility);
        this.isDisplayed = false;
        // event?.preventDefault()
    };
    return ConfirmModal;
}());
// const confirmModal : ConfirmModal = new ConfirmModal();
export default ConfirmModal;
//# sourceMappingURL=ConfirmModal.js.map