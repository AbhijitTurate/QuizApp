import { generateUniqueId } from "../../utils/generateUniqueId.js";
var ResultModal = /** @class */ (function () {
    function ResultModal(resultScore) {
        this.id = generateUniqueId({ prefix: "modal" });
        this.resultScore = resultScore;
        this.isCanceled = false;
        this.isDisplayed = false;
    }
    ResultModal.prototype.render = function () {
        var modalDivContainer = document.createElement("div");
        var modalDiv = document.createElement("div");
        var modalHeading = document.createElement("h3");
        var scoreDisplay = document.createElement("h3");
        var cancelButton = document.createElement("button");
        // Assigning id
        modalDivContainer.id = this.id;
        modalDiv.id = "".concat(this.id, "-content");
        modalHeading.id = "".concat(this.id, "-heading");
        scoreDisplay.id = "".concat(this.id, "-score");
        cancelButton.id = "".concat(this.id, "-cancelBtn");
        // Innter text
        modalHeading.innerText = "Thank you!?";
        scoreDisplay.innerText = "Youre score : ".concat(this.resultScore);
        cancelButton.innerText = "Cancel";
        modalDivContainer.classList.add("modalContainer");
        modalDiv.classList.add("modal");
        // appending child
        modalDiv.appendChild(modalHeading);
        modalDiv.appendChild(scoreDisplay);
        modalDiv.appendChild(cancelButton);
        modalDivContainer.appendChild(modalDiv);
        cancelButton.onclick = this.setVisibility.bind(this);
        // cancelButton.onclick = this.returnResponse(this.isCanceled)!;
        return modalDivContainer;
    };
    ResultModal.prototype.setVisibility = function () {
        this.isCanceled = true;
        var modalContainer = document.getElementById(this.id);
        modalContainer.style.visibility = "hidden";
        this.isDisplayed = true;
        window.location.reload();
    };
    ResultModal.prototype.mount = function (el) {
        el.appendChild(this.render());
        this.isDisplayed = true;
    };
    return ResultModal;
}());
export default ResultModal;
//# sourceMappingURL=ResultModal.js.map