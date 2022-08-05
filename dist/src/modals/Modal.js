import ConfirmModal from "./ConfirmModal.js";
import ResultModal from "./ResultModal.js";
var ModalType;
(function (ModalType) {
    ModalType["ResultModal"] = "result";
    ModalType["ConfirmModal"] = "confirm";
})(ModalType || (ModalType = {}));
var Modal = /** @class */ (function () {
    // modalType:ModalConfig.ConfirmModal | ModalConfig.ResultModal
    function Modal(modalType, finalScore) {
        var bodyElement = document.body;
        switch (modalType) {
            case ModalType.ConfirmModal:
                console.log("in confirm start");
                this.modalClass = new ConfirmModal();
                this.modalClass.mount(bodyElement);
                // this.modalClass.returnResponse()
                // this.modalClass.init()
                console.log("in confirm");
                break;
            case ModalType.ResultModal:
                console.log("In result switch");
                this.modalClass = new ResultModal(finalScore);
                return;
            default:
                break;
        }
        //   this.modalType = -1;
    }
    return Modal;
}());
export default Modal;
//# sourceMappingURL=Modal.js.map